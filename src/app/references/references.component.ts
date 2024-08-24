import { Component, OnInit } from '@angular/core';
import { Reference } from '../types/reference';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {
  slideIndex = 1;
  references: Array<Reference> = [
    {author:"Robin S. - Team Partner",content:'"It was a pleasure to work with Ismail. He always kept a positive and constructive atmosphere and spared no effort to make our project a success."'},
    {author: "A. Fischer - Team Partner", content:`"I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him again given the chance."`},
    {author:"H. Janisch - Team Partner",content:`"Our project benefited enormously from Lukas's way of working."`}
  ];

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    const slides = document.getElementsByClassName("carousel-slide") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }

    const offset = -((this.slideIndex - 1) * (slides[0].offsetWidth + 40)); // 40px for margin

    const slideshowContainer = document.querySelector('.slideshow-container') as HTMLElement;
    slideshowContainer.style.transform = `translateX(${offset}px)`;

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[this.slideIndex - 1].className += " active";
  }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }
}