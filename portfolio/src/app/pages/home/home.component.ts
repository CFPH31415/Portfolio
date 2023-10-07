import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const typed = new Typed('.multiple-texto', {
      strings: ['Full Stack Developer'],
      typeSpeed: 120,
      backSpeed: 120,
      backDelay: 1000,
      loop: true
    });
  }
}
