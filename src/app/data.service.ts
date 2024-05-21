import { Injectable } from '@angular/core';
import { Artist } from './artists/artist.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private artists: Artist[] = [
    { grade: 1, name: 'Davido', country: 'Nigeria' },
    { grade: 2, name: 'Burna Boy', country: 'Nigeria' },
    { grade: 3, name: 'Diamondz Platinum', country: 'Tanzania' },
    { grade: 4, name: 'Sarkodie', country: 'Ghana' },
    { grade: 5, name: 'Mr. Eazi', country: 'Nigeria' },
  ];

  constructor() {}

  getList(): Artist[] {
    return this.artists;
  }

  incrementGrade(index: number): void {
    this.artists[index].grade += 1;
  }
}
