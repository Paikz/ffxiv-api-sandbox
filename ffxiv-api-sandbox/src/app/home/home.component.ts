import { Component, OnInit } from '@angular/core';
import { CharacterService }   from '../services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  character: {} = {};

  constructor(private character_s: CharacterService ) {}

  ngOnInit() {
  }

  getCharacter() {
    
  }

}
