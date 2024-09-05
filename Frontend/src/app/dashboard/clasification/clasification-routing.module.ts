import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinaLaPosicionComponent } from './components/adivina-la-posicion/adivina-la-posicion.component';
import { ClasificationPageComponent } from './pages/clasification-page/clasification-page.component';
import { PredictPositionRNComponent } from './components/predict-position-rn/predict-position-rn.component';

const routes: Routes = [
  {
    path: '',
    component: ClasificationPageComponent,
  },
  { path: 'predict-position', component: AdivinaLaPosicionComponent },
  { path: 'predict-positionRN', component: PredictPositionRNComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasificationRoutingModule { }
