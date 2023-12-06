import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Note } from '../Types/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  id: number = 0;
  note: Note = {} as Note;

  constructor(private route: ActivatedRoute, public dataService: DataService) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.note = this.dataService.getNote(this.id);
    });
  }
}
