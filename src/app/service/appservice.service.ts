import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  add(x: number, y: number) {
    return x + y;
  }
}
