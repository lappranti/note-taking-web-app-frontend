import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private apiUrlNote: string =
    'https://note-taking-web-app-backend-txde.onrender.com/api/notes';
  constructor(private http: HttpClient) {}

  getNotes() {
    return this.http.get<Note[]>(this.apiUrlNote);
  }

  getTags() {
    return this.http.get<string[]>(`${this.apiUrlNote}/tags`);
  }
}

interface Note {
  _id: string;
  title: string;
  description: string;
  isArchived: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
