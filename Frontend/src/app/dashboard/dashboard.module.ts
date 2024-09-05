import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PredictionsPageComponent } from './predictions/pages/predictions-page/predictions-page.component';
import { ClasificationPageComponent } from './clasification/pages/clasification-page/clasification-page.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './shared/formulario/formulario.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DocumentationPageComponent } from './pages/documentation-page/documentation-page.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HomePageComponent,
    PredictionsPageComponent,
    ClasificationPageComponent,
    TopMenuComponent,
    FormularioComponent,
    ContactPageComponent,
    DocumentationPageComponent,
    FooterComponent
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TopMenuComponent,
    FormularioComponent,
    FooterComponent
  ]
})
export class DashboardModule { }
