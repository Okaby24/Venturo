import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
   reviews = signal([
    {
      name: 'Sarah Ahmed',
      role: 'Product Manager at Blink22',
      comment:
        'Working with your team was an amazing experience. The website exceeded our expectations — clean design, fast performance, and pixel-perfect responsiveness!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=5',
    },
    {
      name: 'Omar Khaled',
      role: 'CEO at TechEdge',
      comment:
        'Your attention to detail and understanding of our vision made the whole process seamless. Excellent communication and delivery speed!',
      rating: 4,
      image: 'https://i.pravatar.cc/150?img=8',
    },
    {
      name: 'Lina Saad',
      role: 'Marketing Specialist at Nova',
      comment:
        'Professional work and great technical skills. The final project perfectly matched our brand identity. Highly recommended!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=12',
    },
     {
      name: 'Lina Saad',
      role: 'Marketing Specialist at Nova',
      comment:
        'Professional work and great technical skills. The final project perfectly matched our brand identity. Highly recommended!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=12',
    },
     {
      name: 'Lina Saad',
      role: 'Marketing Specialist at Nova',
      comment:
        'Professional work and great technical skills. The final project perfectly matched our brand identity. Highly recommended!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=12',
    },
     {
      name: 'Lina Saad',
      role: 'Marketing Specialist at Nova',
      comment:
        'Professional work and great technical skills. The final project perfectly matched our brand identity. Highly recommended!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=12',
    },
  ]);

  constructor() { }

  ngOnInit() {
  }

}
