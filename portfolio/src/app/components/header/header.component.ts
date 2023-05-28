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

    const elementRef = this.elementRef.nativeElement;
    const label = elementRef.querySelector('.theme-switch');
    const darkModeIcon = elementRef.querySelector('#darkMode-icon');
    const slider = elementRef.querySelector('.slider');
    
    const applyThemeAndIconState = () => {
      const savedTheme = localStorage.getItem('theme');
      const savedIconState = localStorage.getItem('iconState');
    
      if (savedTheme) {
        document.body.classList.add(savedTheme);
      }
    
      if (savedIconState) {
        darkModeIcon.classList.add(savedIconState);
        darkModeIcon.style.transform = savedIconState === 'bxs-sun' ? 'translateX(25px)' : 'translateX(0)';
      }
    };
    
    const toggleDarkMode = () => {
      darkModeIcon.classList.toggle('bxs-sun');
      document.body.classList.toggle('dark-mode');
    
      const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : '';
      const isSunIcon = darkModeIcon.classList.contains('bxs-sun');
    
      localStorage.setItem('theme', theme);
      localStorage.setItem('iconState', isSunIcon ? 'bxs-sun' : '');
    
      darkModeIcon.style.transform = isSunIcon ? 'translateX(25px)' : 'translateX(0)';
    };
    applyThemeAndIconState();
    label.addEventListener('click', toggleDarkMode);
    slider.addEventListener('click', toggleDarkMode);
  }
}

