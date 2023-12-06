import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Note } from '../Types/note';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  name: string = '';
  noteList: Note[];
  constructor(public dataService: DataService) {
    this.noteList = dataService.noteList;
  }

  addNote() {
    if (this.name) {
      this.dataService.addNote(this.name);
      this.name = '';
    }
  }
}
