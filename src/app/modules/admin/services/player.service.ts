import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../components/player.interface';
import { PLAYERS } from '../mock-players/players';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  
  players = PLAYERS;

  constructor() { }

  getPlayers(): Observable<Player[]> {
    const players = of(PLAYERS);
    return players;
  }

  getPlayer(id: number): void {
    // return this.players.filter(player => player.id === id);
  }

  createPlayer(player: Player): Observable<Player[]> {
    player.id = this.players.find(player => player.id === this.players.length)!.id + 1;
    console.log(player);
    this.players.push(player);
    return this.getPlayers();
  }

  deletePlayer(id: number) {
    const indexOfPlayer = this.players.findIndex((player) => {
      return player.id === id;
    });
    if (indexOfPlayer !== -1) {
      this.players.splice(indexOfPlayer, 1);
    }
    return this.getPlayers();
  }
}
