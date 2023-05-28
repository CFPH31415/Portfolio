import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortafolioComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortafolioComponent,
    ContactComponent
  ]
})
export class PagesModule { }
