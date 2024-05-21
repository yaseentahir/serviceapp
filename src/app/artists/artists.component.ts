import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../data.service';
import { Artist } from './artist.model';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [];

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.artists = this.dataService.getList();
  }

  incrementGrade(index: number): void {
    this.dataService.incrementGrade(index);
    this.cdr.detectChanges(); // Explicitly trigger change detection
  }
}
