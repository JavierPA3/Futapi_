import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClusteringPageComponent } from './pages/clustering-page/clustering-page.component';
import { SimilarPlayersComponent } from './components/similar-players/similar-players.component';

const routes: Routes = [
  {
    path: '',
    component: ClusteringPageComponent,
  },
  { path: 'similar-players', component: SimilarPlayersComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClusteringRoutingModule { }
