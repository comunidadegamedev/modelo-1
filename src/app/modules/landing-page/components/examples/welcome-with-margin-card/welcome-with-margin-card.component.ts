import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-with-margin-card',
  templateUrl: './welcome-with-margin-card.component.html',
  styleUrls: ['./welcome-with-margin-card.component.css']
})
export class WelcomeWithMarginCardComponent implements OnInit {

  private navbarElement: HTMLElement
  
  constructor() {
    this.navbarElement = document.querySelector('.navbar') as HTMLElement
  }

  ngOnInit(): void {
    if (window.pageYOffset < 450){
      this.navbarElement.classList.add('navbar-inverse');
      this.navbarElement.classList.remove('navbar-normal');
    }
  }
  ngOnDestroy() {
    this.navbarElement.classList.add('navbar-normal');
    this.navbarElement.classList.remove('navbar-inverse');
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let brandImgElement = document.querySelectorAll('.navbar-brand-img') as NodeListOf<HTMLElement>;
    if (window.pageYOffset > 450) {
      this.navbarElement.classList.add('navbar-normal');
      this.navbarElement.classList.remove('navbar-inverse');
      brandImgElement.forEach(element => {
        element.classList.add('brand-inverse');
        // element.classList.remove('brand-normal');
      });
    } else {
      
      this.navbarElement.classList.add('navbar-inverse');
      this.navbarElement.classList.remove('navbar-normal');
      brandImgElement.forEach(element => {
        // element.classList.add('brand-normal');
        element.classList.remove('brand-inverse');
      });
    }
  }
}
