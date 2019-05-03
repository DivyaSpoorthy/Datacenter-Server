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
  selectedColor: string;
  tiles: Tile[] = [
    {text: 'Dell', cols: 2, rows: 4, color: 'lightblue'},
    {text: 'Japan/LCS', cols: 6, rows: 2, color: 'lightgreen'},
    {text: 'AIMS', cols: 1, rows: 8, color: 'lightpink'},
    {text: 'Power/Backup', cols: 5, rows: 5, color: '#DDBDF1'},
    {text: 'News Lab', cols: 2, rows: 5, color: '#EF0045'},
    {text: 'ISAC', cols: 4, rows: 6, color: '#fffdaf'},
    {text: 'AI', cols: 2, rows: 5, color: '#ffd27f'},
    {text: 'Civil/Chemical', cols: 7, rows: 2, color: '#00c2c7'},
  ];

  highlight(tile) {
    this.selectedColor = tile.color;
  }
}
