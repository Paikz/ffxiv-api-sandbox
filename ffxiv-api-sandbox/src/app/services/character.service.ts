import { Injectable }     from '@angular/core';
import { Http, Headers, RequestOptions }  from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class CharacterService {

  header = new Headers();

  constructor(private http: Http) {
    this.header.append('Content-Type', 'application/json');
   }

  getCharacter(): Promise<{}> {

    const options = new RequestOptions({
      headers: this.header
    });

    return this.http
      .get("https://api.xivdb.com/character/15494407")
      .toPromise()
      .then(res => res.json())
      .catch(error => { return Promise.reject(error); });
  }

}
