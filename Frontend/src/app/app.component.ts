import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'FutApi';

  ngOnInit() {
    // Prevenir navegación hacia atrás/adelante usando los botones del navegador
    history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', this.preventNavigation.bind(this));

    // Prevenir recarga de la página con métodos adicionales
    window.addEventListener('beforeunload', this.preventReload.bind(this));
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if ((event.key === 'r' && event.ctrlKey) || event.key === 'F5') {
      event.preventDefault();
    }
  }

  preventNavigation(event: PopStateEvent) {
    history.pushState(null, '', window.location.href);
  }

  preventReload(event: BeforeUnloadEvent) {
    event.preventDefault();
    event.returnValue = '';
  }
}