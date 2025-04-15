import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../shared/services/services/note.service';
import { AuthService } from '../../../shared/services/services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../shared/services/services/auth.interceptor';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
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
