// src/app/artistnames/artistnames.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Artist } from '../artists/artist.model';

@Component({
  selector: 'app-artistnames', // Ensure this matches the tag used in templates
  templateUrl: './artistnames.component.html',
  styleUrls: ['./artistnames.component.css'],
})
export class ArtistnamesComponent implements OnInit {
  artists: Artist[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.artists = this.dataService.getList();
  }
}
