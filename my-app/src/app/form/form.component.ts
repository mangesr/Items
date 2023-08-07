import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
 

  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  handleItemDeleted(deletedItem: string) {
    console.log(`${deletedItem} was deleted.`);
  }
  
}
