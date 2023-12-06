import { Injectable } from '@angular/core';
import { Note } from './Types/note';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  noteList: Note[] = [
    { name: 'Список покупок', text: 'Молоко\nХлеб\nЯйца\nКефир' },
    { name: 'Лучшие имена для кошек', text: 'Акула\nРакета' },
    { name: 'Мои мысли', text: 'Информация засекречена.' },
  ];
  constructor() {}

  getNote(id: number) {
    return this.noteList[id];
  }

  addNote(name: string) {
    this.noteList.push({ name: name, text: '' });
  }
}
