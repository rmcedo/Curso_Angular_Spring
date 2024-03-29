import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { CourseService } from '../services/course.service';
import { Course } from './../model/course';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  courses$: Observable<Course[]>
  displayedColumns = ['name', 'category']


  constructor(
    private coursesService: CourseService,
    public dialog: MatDialog
    ) {
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error =>{
        this.onError('Erro ao carregar Cursos')
        return of([])
      })
    )
  }

  onError(errorMsg: string){

    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })


  }

  ngOnInit(): void {
  }

}
