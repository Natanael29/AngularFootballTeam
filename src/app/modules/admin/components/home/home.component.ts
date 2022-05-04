import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Player } from '../player.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players);
  }

  deletePlayer(id: number) {
    this.playerService.deletePlayer(id).subscribe();
  }
}
