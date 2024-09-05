import { NgModule } from '@angular/core';
import { AdivinaLaPosicionComponent } from './components/adivina-la-posicion/adivina-la-posicion.component';
import { ClasificationRoutingModule } from './clasification-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from "../dashboard.module";
import { PredictPositionRNComponent } from './components/predict-position-rn/predict-position-rn.component';


@NgModule({
  exports: [AdivinaLaPosicionComponent],
  declarations: [
    AdivinaLaPosicionComponent,
    PredictPositionRNComponent
  ],
  providers: [],
  imports: [ClasificationRoutingModule, CommonModule, FormsModule, DashboardModule]
})
export class ClasificationExampleModule { }
