import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {
  slideIndex = 1;

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