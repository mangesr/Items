import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

type NewType = number;

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent {
  @Input() items: string[] = [];
  @Output() itemDeleted = new EventEmitter<string>();

  newItem: string = '';

  addItem() {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  deleteItem(item: string) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.itemDeleted.emit(item);
    }
  }

 
}
