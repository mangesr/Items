import { Injectable } from '@angular/core';
import { User } from './userInterface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  constructor() { }
  
  users: User[] = [ 
  
  ];


}
