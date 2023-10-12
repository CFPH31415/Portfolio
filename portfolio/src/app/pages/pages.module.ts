import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactmeComponent } from './contactme/contactme.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortafolioComponent,
    ContactmeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortafolioComponent,
    ContactmeComponent
  ]
})
export class PagesModule { }
