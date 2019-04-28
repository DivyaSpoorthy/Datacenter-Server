import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-infra',
  templateUrl: './infra.component.html',
  styleUrls: ['./infra.component.scss']
})

export class InfraComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 4, color: 'lightblue'},
    {text: 'Two', cols: 6, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 8, color: 'lightpink'},
    {text: 'Four', cols: 5, rows: 5, color: '#DDBDF1'},
    {text: 'Five', cols: 2, rows: 5, color: '#EF0078'},
    {text: 'Six', cols: 4, rows: 6, color: '#FFC77D'},
    {text: 'Seven', cols: 2, rows: 5, color: '#09AF00'},
    {text: 'Eight', cols: 7, rows: 2, color: '#3722F6'},
  ];
}
