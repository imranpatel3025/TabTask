import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Itab } from 'src/module/interface';

@Component({
  selector: 'app-tab-task-ng-for',
  templateUrl: './tab-task-ng-for.component.html',
  styleUrls: ['./tab-task-ng-for.component.scss']
})
export class TabTaskNgForComponent implements OnInit {

  tabsArr : Array<Itab> = [
    {
      title : `Angular`,
      content : `<b>Angular</b> is a frontend framework developed by Google. It is used to create the user interface (UI) of web
        applications. With Angular, we can create components, forms, routing, data binding, directives, and services.
        For example, login pages, registration forms, dashboards, and CRUD applications can be developed using Angular.
        Angular uses TypeScript to write application code.`
    },
    {
      title : `Express`,
      content : ` <b>ExpressJS</b> is a backend web framework for NodeJS. It is used to create APIs and handle HTTP requests and
        responses between the frontend and backend. ExpressJS provides routing, middleware, and request handling. For
        example, when a user submits a registration form in Angular, ExpressJS receives the request, processes it, and
        sends a response back to Angular.`
    },
    {
      title : `NodeJS`,
      content : `<b>NodeJS</b> is a JavaScript runtime environment that allows us to execute JavaScript outside the browser.
        Normally, JavaScript runs inside a web browser, but with NodeJS, we can run JavaScript on a server or computer. It is used
        for server-side development, file handling, creating servers, and managing packages using NPM. ExpressJS runs on
        top of NodeJS to develop backend applications.`
    },
    {
      title : `MongoDB`,
      content : `<b>MongoDB</b> is a NoSQL database used to store and manage application data. Unlike relational databases,
        MongoDB stores data in the form of collections and documents using a JSON-like format called BSON. We can perform CRUD
        operations such as Insert, Read, Update, and Delete. For example, in a student management application, MongoDB
        stores student names, ages, addresses, and other information.`
    }
  ]

  isselected : string = 'angular'
  constructor() { }

  ngOnInit(): void {
  }

  onChangeSkill(skill : string){
    this.isselected = skill
  }
}
