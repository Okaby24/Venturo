import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../../../core/utils/API_URLS';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzProgressModule,
    NzUploadModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  private http = inject(HttpClient);

  files = signal<{ name: string; progress: number; file: File }[]>([]);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      startupName: ['', Validators.required],
      founderName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      foundedDate: [''],

      industry: ['', Validators.required],
      description: ['', Validators.required],
      businessModel: ['', Validators.required],
      stage: ['', Validators.required],
      employeesCount: [''],

      headquarters: [''],
      linkedin: ['', Validators.required],
      teamMembers: this.fb.array([
        this.fb.control('', {
          validators: Validators.required,
          nonNullable: true,
        }),
      ]),
    });
  }

  get teamMembers(): FormArray<FormControl<string>> {
    return this.registerForm.get('teamMembers') as FormArray<
      FormControl<string>
    >;
  }

  addTeamMember() {
    this.teamMembers.push(
      new FormControl('', {
        validators: Validators.required,
        nonNullable: true,
      })
    );
  }

  removeTeamMember(index: number) {
    if (this.teamMembers.length > 1) this.teamMembers.removeAt(index);
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) this.addFiles(Array.from(input.files));
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
  onDragLeave(event: DragEvent) {
    event.preventDefault();
  }
  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files)
      this.addFiles(Array.from(event.dataTransfer.files));
  }

  addFiles(newFiles: File[]) {
    newFiles.forEach((file) => {
      if (!this.files().some((f) => f.name === file.name)) {
        const uploadFile = { name: file.name, progress: 0, file };
        this.files.update((list) => [...list, uploadFile]);
        this.simulateUpload(uploadFile);
      }
    });
  }

  simulateUpload(file: { name: string; progress: number; file: File }) {
    const interval = setInterval(() => {
      file.progress = Math.min(file.progress + 10, 100);
      this.files.update((list) => [...list]);
      if (file.progress === 100) clearInterval(interval);
    }, 300);
  }

  getFormData(): FormData {
    const formData = new FormData();

    // Append all fields
    Object.entries(this.registerForm.value).forEach(([key, value]) => {
      if (value === null || value === undefined) return;

      if (key === 'teamMembers' && Array.isArray(value)) {
        value.forEach((member) => formData.append('teamMembers', member));
      } else {
        formData.append(key, value.toString());
      }
    });

    // Append files as "documents" so Spring can parse them with @RequestPart
    this.files().forEach((f) =>
      formData.append('documents', f.file, f.file.name)
    );

    return formData;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const formData = this.getFormData();

    // ✅ POST directly to Spring Boot backend
    this.http.post(API_URLS.Startups.registerStartup, formData).subscribe({
      next: (res) => {
        console.log('✅ Startup registered:', res);
        this.registerForm.reset();
        this.files.set([]);
        this.submitted = false;
      },
      error: (err) => {
        console.error('❌ Registration failed:', err);
      },
    });
  }
}
