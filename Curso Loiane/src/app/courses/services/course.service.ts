import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './../model/course';
import { first, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly API = '/assets/courses.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses)
      )
    )
  }
}
