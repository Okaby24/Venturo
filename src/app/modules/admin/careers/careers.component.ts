import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  jobs = signal([
    {
      label : 'Frontend Enigneer',
      experienceLevel: '1-3',
      description: `ince the 1500s, when an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley`
       
    },
     {
      label : 'Backend Enigneer',
      experienceLevel: '3-5',
      description: `ince the 1500s, when an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley`
       
    },
     {
      label : 'Devops Enigneer',
      experienceLevel: '10+',
      description: `ince the 1500s, when an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley`
       
    },
    {
      label : 'Backend Enigneer',
      experienceLevel: '3-5',
      description: `ince the 1500s, when an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley`
       
    },
    {
      label : 'Backend Enigneer',
      experienceLevel: '3-5',
      description: `ince the 1500s, when an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley`
       
    },
    {
      label : 'Backend Enigneer',
      experienceLevel: '3-5',
      description: `ince the 1500s, when an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley`
       
    },
    
  ])

  StartupJobs = signal([
    {
      startupName:'brandy',
      label : 'Devops Enigneer',
      experienceLevel: '10+',
      description: `ince the 1500s, when an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley`
       
    
    },
     {
      startupName:'brandy',
      label : 'Devops Enigneer',
      experienceLevel: '10+',
      description: `ince the 1500s, when an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley`
       
    
    },
     {
      startupName:'brandy',
      label : 'Devops Enigneer',
      experienceLevel: '10+',
      description: `ince the 1500s, when an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley`
       
    
    }
    ,
     {
      startupName:'brandy',
      label : 'Devops Enigneer',
      experienceLevel: '10+',
      description: `ince the 1500s, when an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley`
       
    
    },
     {
      startupName:'brandy',
      label : 'Devops Enigneer',
      experienceLevel: '10+',
      description: `ince the 1500s, when an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley`
       
    
    },
     {
      startupName:'brandy',
      label : 'Devops Enigneer',
      experienceLevel: '10+',
      description: `ince the 1500s, when an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley`
       
    
    },
     {
      startupName:'brandy',
      label : 'Devops Enigneer',
      experienceLevel: '10+',
      description: `ince the 1500s, when an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley
      en an unknown printer took a galley`
       
    
    }
  ])

  constructor() { }

  ngOnInit() {
  }

}
