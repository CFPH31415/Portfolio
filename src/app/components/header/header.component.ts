import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const menuIcon = this.elementRef.nativeElement.querySelector('#menu-icon');
    const navbar = this.elementRef.nativeElement.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    });


    let sections = this.elementRef.nativeElement.querySelectorAll('section');
    let navLinks = this.elementRef.nativeElement.querySelectorAll('header nav a');

    window.onscroll = () => {
      sections.forEach((sec: HTMLElement) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links: HTMLElement) => {
            links.classList.remove('active');
            this.elementRef.nativeElement.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
        };
      });

      let header = this.elementRef.nativeElement.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    };

  }}
    
  
