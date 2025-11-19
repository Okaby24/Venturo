import { Component, OnInit, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ,NzProgressModule , NzUploadModule ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

   files = signal<{ name: string; progress: number; file: File }[]>([]);

  // Triggered when a file is selected via input
  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.addFiles(Array.from(input.files));
    }
  }

  // Handle drag-over visuals
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  // Reset visuals on drag leave
  onDragLeave(event: DragEvent) {
    event.preventDefault();
  }

  // Handle drop
  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      this.addFiles(Array.from(event.dataTransfer.files));
    }
  }

  // Add new files to the list and start mock upload
  addFiles(newFiles: File[]) {
    newFiles.forEach((file) => {
      const existing = this.files().find((f) => f.name === file.name);
      if (!existing) {
        const uploadFile = { name: file.name, progress: 0, file };
        this.files.update((list) => [...list, uploadFile]);
        this.simulateUpload(uploadFile);
      }
    });
  }

  // Simulate upload with progress animation
  simulateUpload(file: { name: string; progress: number; file: File }) {
    const interval = setInterval(() => {
      const next = Math.min(file.progress + Math.random() * 15, 100);
      file.progress = Math.floor(next);

      this.files.update((list) => [...list]);

      if (file.progress >= 100) {
        clearInterval(interval);
      }
    }, 400);
  }

get teamMembers(): FormArray<FormControl<string>> {
  return this.registerForm.get('teamMembers') as FormArray<FormControl<string>>;
}

addTeamMember() {
  this.teamMembers.push(new FormControl('', { nonNullable: true, validators: [Validators.required] }));
}

removeTeamMember(index: number) {
  if (this.teamMembers.length === 0) {
   this.addTeamMember();
 }
  this.teamMembers.removeAt(index);

}



  constructor(private fb: FormBuilder ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      //Basic Information
      startupName: ['', Validators.required],
      founderName: ['', [Validators.required , Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      registrationNumber: ['', [Validators.required , Validators.minLength(6)]],
      foundedDate: [''],

      //Business Details
      industry: ['', [Validators.required , Validators.minLength(3)]],
      description: ['', [Validators.required , Validators.maxLength(500)]],
      businessModel: ['' ,[Validators.required , Validators.minLength(3)]],
      stage: ['', Validators.required],
      employeesCount: [''],

      //Contact & Team
      headquarters: [''],
      linkedin: ['' , Validators.required],
      teamMembers: this.fb.array([this.fb.control('', { nonNullable: true, validators: [Validators.required] })]),

    });
  }

  // File change handler
  onFileChange(event: any, controlName: string) {
    const file = event.target.files[0];
    if (file) {
      this.registerForm.patchValue({ [controlName]: file });
    }
  }

  // Build FormData to send to backend
getFormData(): FormData {
  const formData = new FormData();

  Object.entries(this.registerForm.value).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    if (key === 'teamMembers' && Array.isArray(value)) {
      // Append each team member separately
      value.forEach((member) => {
        formData.append('teamMembers', member);
      });
    } else {
      formData.append(key, value.toString());
    }
  });

  // Add all uploaded documents
  this.files().forEach((fileObj) => {
    formData.append('documents', fileObj.file, fileObj.file.name);
  });

  return formData;
}




  onSubmit() {
  this.submitted = true;

  if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched();
    
  }

  const formData = this.getFormData();

  // Log FormData content for debugging
  const debug: Record<string, any> = {};
  formData.forEach((value, key) => {
    if (debug[key]) {
      if (Array.isArray(debug[key])) debug[key].push(value);
      else debug[key] = [debug[key], value];
    } else {
      debug[key] = value;
    }
  });
  console.log('Final FormData ready to send:', debug);

  // TODO: Send formData to backend here
}

}
