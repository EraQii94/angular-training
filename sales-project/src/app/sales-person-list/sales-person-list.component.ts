import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: false,
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {


  salesPersonList: any[] = [
    new SalesPerson("James", "King", "james.King@gmail.com", 50000),
    new SalesPerson("Laura", "Smith", "laura.smith@gmail.com", 40000),
    new SalesPerson("David", "Martin", "david.martin@gmail.com", 45000),
    new SalesPerson("Susan", "Johnson", "susan.johnson@gmail.com", 60000)

  ];

  constructor() { }

  ngOnInit(){}
}
