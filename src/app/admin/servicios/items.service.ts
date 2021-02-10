import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../modelos/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('http://localhost:3001/items');
  }

  createItem(item: Item) {
    return this.http.post('http://localhost:3001/items', item);
  }

}
