import { Injectable } from '@angular/core';
import { Task } from '../Task';
// import { TASKS } from '../mock-tasks';
import { Observable } from 'rxjs';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    // console.log(url);
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<Task>(url, task, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  addNewTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiURL, task, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
