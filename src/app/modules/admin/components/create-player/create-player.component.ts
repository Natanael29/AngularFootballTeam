import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {

  constructor(private playerService: PlayerService, 
    private route: ActivatedRoute, 
    private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  create(name: string, age: string, position: string, url: string) : void {
    let newPlayer = {
      id: -1,
      name : name,
      age : Number(age),
      position : position,
      url: url
    }
    if (newPlayer) {
      this.playerService.createPlayer(newPlayer)
      .subscribe(() => this.goBack())
    }
  }

}
