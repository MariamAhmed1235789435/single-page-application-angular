import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // استيراد CommonModule
@Component({
  selector: 'app-portfolio',
  standalone: true, // تأكيد أنك تستخدم مكونات مستقلة
  imports: [CommonModule], // أضف CommonModule هنا
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  selectedImage: string | null = null;

  portfolioItems = [
    { image: '/image/poert1.png', alt: 'Portfolio 1' },
    { image: '/image/port2.png', alt: 'Portfolio 2' },
    { image: '/image/port3.png', alt: 'Portfolio 3' },
    { image: '/image/poert1.png', alt: 'Portfolio 4' },
    { image: '/image/port2.png', alt: 'Portfolio 5' },
    { image: '/image/port3.png', alt: 'Portfolio 6' },
  ];

  openModal(image: string) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }

}
