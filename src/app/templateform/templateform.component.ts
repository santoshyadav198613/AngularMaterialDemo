import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  employee = new Employee();
  constructor() { }

  ngOnInit() {
  }

  addEmployee() {
    console.log(this.employee);
  }

}
