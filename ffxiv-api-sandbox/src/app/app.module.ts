import { BrowserModule }      from '@angular/platform-browser';
import { RouterModule }       from '@angular/router';
import { NgModule }           from '@angular/core';

//Components
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';
import { HomeComponent }      from './home/home.component';

//Services
import { CharacterService }   from './services/character.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent
  }
])
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
