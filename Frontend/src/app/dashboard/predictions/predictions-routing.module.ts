import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictionsPageComponent } from './pages/predictions-page/predictions-page.component';
import { ExpectedGoalsComponent } from './components/expected-goals/expected-goals.component';
import { ExpectedAssistComponent } from './components/expected-assist/expected-assist.component';
import { ExpectedTacklesComponent } from './components/expected-tackles/expected-tackles.component';
import { ExpectedDribblesComponent } from './components/expected-dribbles/expected-dribbles.component';
import { ExpectedGCAComponent } from './components/expected-gca/expected-gca.component';

const routes: Routes = [
  {
    path: '',
    component: PredictionsPageComponent,
  },
  { path: 'expected-goals', component: ExpectedGoalsComponent },
  { path: 'expected-assists', component: ExpectedAssistComponent },
  { path: 'expected-tackles', component: ExpectedTacklesComponent },
  { path: 'expected-dribbling', component: ExpectedDribblesComponent },
  { path: 'expected-gca', component: ExpectedGCAComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictionsRoutingModule { }
