import { Component } from '@angular/core';
import { MenuItem } from '../../../dashboard/interfaces/menu';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {
  public showExamplesPrediction = false;
  public showExamplesClasification = false;
  public showExamplesClustering = false;

  public routes = ['predictions', 'clasification', 'clustering'];
  public topMainMenu: MenuItem[] = [
    { title: 'Inicio', route: './futapi/home' },
    { title: 'Docs', route: './futapi/docs' },
    { title: 'Contacto', route: './futapi/contact' },
  ];

  public sideMainMenu: MenuItem[] = [
    { title: 'Predicciones', route: './futapi/predictions' },
    { title: 'Clasificación', route: './futapi/clasification' },
    { title: 'Clustering', route: './futapi/clustering' },
  ];

  public clasificationMenu: MenuItem[] = [
    { title: 'Posición', route: './futapi/clasification/predict-position' },
    { title: 'Pos. RN', route: './futapi/clasification/predict-positionRN' },
  ];

  public predictionsMenu: MenuItem[] = [
    { title: 'Goles', route: './futapi/predictions/expected-goals' },
    { title: 'Asist.', route: './futapi/predictions/expected-assists' },
    { title: 'Entradas', route: './futapi/predictions/expected-tackles' },
    { title: 'Regates', route: './futapi/predictions/expected-dribbling' },
    { title: 'ACG', route: './futapi/predictions/expected-gca' },
  ];
  public clusteringMenu: MenuItem[] = [
    { title: 'Similares', route: './futapi/clustering/similar-players' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRoute();
      }
    });
  }

  public checkRoute() {
    const currentUrl = this.router.url;

    this.showExamplesPrediction = currentUrl.includes(this.routes[0]);
    this.showExamplesClasification = currentUrl.includes(this.routes[1]);
    this.showExamplesClustering = currentUrl.includes(this.routes[2]);
  }
}
