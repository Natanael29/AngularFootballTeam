import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from '../../services/player.service';
import { Player } from '../player.interface';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  @Input() player?: any;

  constructor(private playerService: PlayerService, 
    private route: ActivatedRoute, 
    private location: Location) { }

  ngOnInit(): void {
    this.getPlayerData();
  }

  getPlayerData() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    let player = this.playerService.getPlayer(id);
    this.player = player;
  }

  updatePlayerData() {
    if (this.player) {
      this.playerService.updatePlayer(this.player);
      this.goBack();
    }
  }

  goBack() {
    this.location.back();
  }
}
