import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  items:string[] =[];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  delete():void{
     this.items.pop()
  }



}
