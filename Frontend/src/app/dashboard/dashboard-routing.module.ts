import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DocumentationPageComponent } from './pages/documentation-page/documentation-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomePageComponent },
      {
        path: 'docs', component: DocumentationPageComponent
      },
      { path: 'contact', component: ContactPageComponent },

      { path: 'predictions', loadChildren: () => import('../dashboard/predictions/predictions.module').then(m => m.PredictionsModule) },
      {
        path: 'clasification', loadChildren: () => import('../dashboard/clasification/clasification.module').then(m => m.ClasificationExampleModule)
      },
      { path: 'clustering', loadChildren: () => import('../dashboard/clustering/clustering.module').then(m => m.ClusteringModule) },

      { path: '**', redirectTo: 'home' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
