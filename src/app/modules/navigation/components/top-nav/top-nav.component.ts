import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor() { 
    
  //   let navigationBar = this.el.nativeElement.querySelector('.navbar') as HTMLElement
  //   document.addEventListener('scroll', function() {
  //     console.log('scrolled');
  //     if (window.scrollY >= 450){
  //       console.log("maior");
  //       navigationBar.classList.add("scrolled")
  //     }
  //  });
  }

  ngOnInit(): void {
  }
  
  scroll(elementId: string){
    let htmlElement = document.getElementById(elementId) as HTMLElement;
    htmlElement.scrollIntoView({behavior: 'smooth', block: 'center' });
  }

}
