import { Component, OnInit } from '@angular/core';
interface IStudent {
  id:number;
  firstName: string;
  lastName: string;
  course: string;
}
@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  
  students: Array<IStudent> = [];

  constructor() {
  this.students[0] = {
    id: 1,
    firstName: 'Jose',
    lastName: 'Hernandez',
    course: 'Programming'
  }
  this.students[1] = {
    id: 1,
    firstName: 'Bradley',
    lastName: 'Cooper',
    course: 'Bowling'
  }
  this.students[2] = {
    id: 1,
    firstName: 'Yu',
    lastName: 'Succ',
    course: 'Philosophy'
  }
  this.students[3] = {
      id: 1,
      firstName: 'John',
      lastName: 'Legend',
      course: 'Music'
  }
  }

  ngOnInit() {
  }

  addStudent(){
    const student: IStudent = {
    id: 1,
    firstName: 'Michael',
    lastName: 'Jordan',
    course: 'Sports'

    };
    this.students.push(student);
  }
}