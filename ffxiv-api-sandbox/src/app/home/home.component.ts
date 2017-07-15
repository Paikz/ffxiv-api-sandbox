import { Component, OnInit }      from '@angular/core';
import { CharacterService }       from '../services/character.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  character: {} = {};

  constructor(private character_s: CharacterService,
              private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getCharacter();
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getCharacter() {
    this.character_s.getCharacter()
      .then(res => this.character = res)
      .catch(error => alert(error));
  }

}
