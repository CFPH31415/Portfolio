import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PagesModule } from '../pages/pages.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PagesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
