import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environments';
import { Player } from '../interfaces/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    const headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');
    return this.http.get<Player[]>(`${this.baseUrl}/getPlayers`, { headers });
    }
    
    
    getPlayerByRk(rk: string | number | null): Observable<Player[]> {
    const headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');
    return this.http.get<Player[]>(`${this.baseUrl}/getPlayerByRk/${rk}`, { headers });
  }

  guessPosition(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.baseUrl}/predictPosition`, player);
  }

  expectedGoals(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.baseUrl}/expectedGoals`, player);
  }
  expectedAssist(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.baseUrl}/expectedAssists`, player);
  }
  expectedTackles(player: Player) {
    return this.http.post<Player>(`${this.baseUrl}/expectedTackles`, player);
  }
  expectedDribbles(player: Player) {
    return this.http.post<Player>(`${this.baseUrl}/expectedDribbles`, player);
  }
  searchSimilarPlayers(player: Player) {
    return this.http.post<Player>(`${this.baseUrl}/searchSimilarPlayers`, player);
  }
  expectedGCA(player: Player) {
    return this.http.post<Player>(`${this.baseUrl}/expectedGCA`, player);
  }

  guessPositionRN(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.baseUrl}/predictPositionRN`, player);
  }
}
