import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: false,
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {


  //create an array of sales person objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("James", "Bond", "james.bond@gmail.com", 1000),
    new SalesPerson("Ethan", "Hunt", "ethan.hunt@gmail.com", 2000),
    new SalesPerson("Jack", "Ryan", "jack.ryan@gmail.com", 3000),
    new SalesPerson("Jason", "Bourne", "jason.bourne@gmail.com", 4000)
  ];
    

  constructor() { }

  ngOnInit(): void {}

}
