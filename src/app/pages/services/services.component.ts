import { Component } from '@angular/core';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  servicios = [
    {
      titulo: 'Front-End',
      descripcion: 'In my Front-End development experience, I create attractive and functional user interfaces using HTML, CSS, and JavaScript, and I specialize in using the Angular framework. I also utilize the React framework with Vite to build modern, high-performance applications. I work collaboratively with designers to implement graphic designs into interactive web pages, ensuring consistency in appearance and functionality. Additionally, I focus on optimizing website performance by employing techniques and tools to ensure speed and efficiency. My goal is to create responsive designs that adapt to different devices and browsers, delivering an exceptional user experience. I add interactivity through animations and advanced functionalities.',
      icono: 'bx bx-code-alt'
    },

    {
      titulo: 'Soft skills',
      descripcion: 'In addition to my technical expertise as a Full Stack Developer, I offer a range of valuable soft skills that enhance my abilities in this field. Effective communication is one of my strengths, allowing me to collaborate seamlessly with clients, designers, and team members. I possess strong problem-solving skills, enabling me to identify and resolve challenges efficiently. With excellent time management skills, I consistently meet deadlines and manage multiple projects simultaneously. I embrace adaptability, staying abreast of the latest technologies and trends in this ever-evolving industry. Collaboration comes naturally to me, as I actively contribute to team discussions and integrate feedback into my work.',
      icono: 'bx bx-group'
    },
    {
      titulo: 'Back-End',
      descripcion: 'In my Back-End development experience, I specialize in building robust and efficient web applications using Java and the Spring Boot framework. My primary focus is on crafting server-side logic and database interactions to power modern web applications. I have extensive experience with MySQL databases, including designing and optimizing database schemas and crafting efficient SQL queries to retrieve and manipulate data. This ensures that the applications I create can handle substantial data loads while remaining responsive. I excel in creating secure and performant RESTful APIs that facilitate seamless communication between the front-end and back-end systems.',
      icono: 'bx bx-code-alt'
    },
  
  ];

  mostrarCompleto: boolean[] = [];

  alternarMostrar(index: number): void {
    this.mostrarCompleto[index] = !this.mostrarCompleto[index];
  }
}
