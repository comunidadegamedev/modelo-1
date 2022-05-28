import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  
  private navbarElement: HTMLElement
  private trailerButtonsEl: NodeListOf<HTMLElement>
  private brandImgElement: NodeListOf<HTMLElement>
  private elementBuyNow: HTMLElement
  private elementDetails: HTMLElement
  private elementDetailsLast: HTMLElement
  private elementNews: HTMLElement
  private elementRequirements: HTMLElement

  private readonly DIV_SHOW_PERCENTAGE = 85
  private readonly NAV_BAR_SHOW_OFFSET = 1050;
  private readonly WELCOME_SHOW_OFFSET = 85
  
  constructor() {
  }

  ngOnInit(): void {
    this.scroll('divHome')
    this.navbarElement = document.querySelector('.navbar') as HTMLElement
    this.trailerButtonsEl = document.querySelectorAll('.tr-button-inverse') as NodeListOf<HTMLElement>
    this.brandImgElement = document.querySelectorAll('.navbar-brand-img') as NodeListOf<HTMLElement>;
    this.elementBuyNow = document.getElementById('divInsideBuyNow') as HTMLElement
    this.elementDetails = document.getElementById('divInsideDetails') as HTMLElement
    this.elementDetailsLast = document.getElementById('detailsLastPhrase') as HTMLElement
    this.elementNews = document.getElementById('divInsideNews') as HTMLElement
    this.elementRequirements = document.getElementById('divInsideRequirements') as HTMLElement

    this.checkHideOrShowElements()
    // if (window.pageYOffset < this.NAV_BAR_SHOW_OFFSET){
    //   this.navbarElement.classList.add('navbar-inverse');
    //   this.navbarElement.classList.remove('navbar-normal');
    // }
    // if (window.pageYOffset < this.WELCOME_SHOW_OFFSET) {
    //   this.trailerButtonsEl.forEach(element => {
    //     element.classList.add('tr-button-normal');
    //     // element.classList.remove('tr-button-inverse');
    //   })
    // } 
  }
  ngOnDestroy() {
    this.navbarElement.classList.add('navbar-normal');
    this.navbarElement.classList.remove('navbar-inverse');
  }

  scroll(elementId: string){
    let htmlElement = document.getElementById(elementId) as HTMLElement;
    htmlElement.scrollIntoView({behavior: 'smooth', block: 'center' });
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkHideOrShowElements()
  }

  checkHideOrShowElements(){
    var viewPortPx = window.innerHeight
    var offsetToShow = (this.DIV_SHOW_PERCENTAGE/100) * viewPortPx 
    // console.log("elementbound -------------");
    // console.log(this.elementBuyNow.getBoundingClientRect().top);
    // console.log("viewPortPx -------------");
    // console.log(viewPortPx)
    // console.log("offsetToShow -------------");
    // console.log(offsetToShow)
    // console.log("-------------");
    
    if (window.pageYOffset > this.NAV_BAR_SHOW_OFFSET) {
      this.navbarElement.classList.add('navbar-normal');
      this.navbarElement.classList.remove('navbar-inverse');
      this.brandImgElement.forEach(element => {
        element.classList.add('brand-inverse');
        // element.classList.remove('brand-normal');
      });
    } else {
      this.navbarElement.classList.add('navbar-inverse');
      this.navbarElement.classList.remove('navbar-normal');
      this.brandImgElement.forEach(element => {
        // element.classList.add('brand-normal');
        element.classList.remove('brand-inverse');
      });
    }

    if (window.pageYOffset > this.WELCOME_SHOW_OFFSET) {
      this.trailerButtonsEl.forEach(element => {
        element.classList.remove('tr-button-normal');
      })
    } else {
      this.trailerButtonsEl.forEach(element => {
        element.classList.add('tr-button-normal');
      })
    }

    
    if (this.elementBuyNow.getBoundingClientRect().top < offsetToShow){
      this.elementBuyNow.classList.add('div-show-normal')
    } else {
      this.elementBuyNow.classList.remove('div-show-normal')
    }

    if (this.elementDetails.getBoundingClientRect().top < offsetToShow){
      this.elementDetails.classList.add('div-show-normal')
    } else {
      this.elementDetails.classList.remove('div-show-normal')
    }
    if (this.elementDetailsLast.getBoundingClientRect().top < offsetToShow){
      this.elementDetailsLast.classList.add('div-show-normal')
    } else {
      this.elementDetailsLast.classList.remove('div-show-normal')
    }

    if (this.elementNews.getBoundingClientRect().top < offsetToShow){
      this.elementNews.classList.add('div-show-normal')
    } else {
      this.elementNews.classList.remove('div-show-normal')
    }

    if (this.elementRequirements.getBoundingClientRect().top < offsetToShow){
      this.elementRequirements.classList.add('div-show-normal')
    } else {
      this.elementRequirements.classList.remove('div-show-normal')
    }
    // if (window.pageYOffset > this.BUYNOW_SHOW_OFFSET + this.DIV_SHOW_ADD_OFFSET){
      
    //   this.elementBuyNow.classList.add('div-show-normal')
    // } else {
    //   this.elementBuyNow.classList.remove('div-show-normal')
    // }

    // if (window.pageYOffset > this.DETAILS_SHOW_OFFSET + this.DIV_SHOW_ADD_OFFSET){
    //   this.elementDetails.classList.add('div-show-normal')
    // } else {
    //   this.elementDetails.classList.remove('div-show-normal')
    // }

    // if (window.pageYOffset > this.NEWS_SHOW_OFFSET + this.DIV_SHOW_ADD_OFFSET){
    //   this.elementNews.classList.add('div-show-normal')
    // } else {
    //   this.elementNews.classList.remove('div-show-normal')
    // }

    // if (window.pageYOffset > this.REQUIREMENTS_SHOW_OFFSET + this.DIV_SHOW_ADD_OFFSET){
    //   this.elementRequirements.classList.add('div-show-normal')
    // } else {
    //   this.elementRequirements.classList.remove('div-show-normal')
    // }
  }
}
