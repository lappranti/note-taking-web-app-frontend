import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../shared/services/services/note.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private apiService: NoteService) {}
  ngOnInit(): void {
    this.getNotes();
    this.getTags();
  }

  getNotes() {
    this.apiService.getNotes().subscribe((resp) => {
      console.log(resp);
    });
  }

  getTags() {
    this.apiService.getTags().subscribe((resp) => {
      console.log(resp);
    });
  }
}
