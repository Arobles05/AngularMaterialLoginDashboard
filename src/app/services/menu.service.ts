import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _httpClient: HttpClient) { }

  getMenu():Observable<Menu[]> {
   return this._httpClient.get<Menu[]>('../../assets/data/data.json');
    }


}

