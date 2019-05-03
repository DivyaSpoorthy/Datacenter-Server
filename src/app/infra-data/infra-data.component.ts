import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Tile} from "../infra/infra.component";

export interface Device {
  name: string;
  position: number;
  type: string;
  cpu: string;
  gpu: string;
  height: string;
}

export interface StatData {
  ID: string;
  desc: string;
  Voltage: number;
}

export interface CabinetData {
  space: number;
  weight: number;
  power: number;
}

@Component({
  selector: 'app-infra-data',
  templateUrl: './infra-data.component.html',
  styleUrls: ['./infra-data.component.scss'],
})

export class InfraDataComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource: Device[];
  route: ActivatedRoute;
  edit: boolean;
  cabinetInfo: CabinetData;
  cname: string;
  cdevice: number;
  totalcount: number;
  totalWts: number;
  currentwts: number;

  constructor(
    route: ActivatedRoute
  ) {
    this.route = route;
    this.edit = false;
    this.cabinetInfo = {
      space: 0,
      weight: 40,
      power: 4
    };
    this.totalcount = 12;
    this.totalWts = 12;
    this.currentwts = 12;
    this.cdevice = 0;
  }


  tiles: Tile[] = [
    {text: 'Dell', cols: 2, rows: 4, color: 'lightblue'},
    {text: 'Japan/LCS', cols: 6, rows: 2, color: 'lightgreen'},
    {text: 'AIMS', cols: 1, rows: 8, color: 'lightpink'},
    {text: 'Power/Backup', cols: 5, rows: 5, color: '#DDBDF1'},
    {text: 'News Lab', cols: 2, rows: 5, color: '#EF0045'},
    {text: 'CCTV', cols: 4, rows: 6, color: '#fffdaf'},
    {text: 'AI', cols: 2, rows: 5, color: '#ffd27f'},
    {text: 'Civil/Chemical', cols: 7, rows: 2, color: '#00c2c7'},
  ];

  ngOnInit() {
    this.cname = this.route.snapshot.paramMap.get('name');
    this.dataSource = new Array<Device>(this.totalcount).fill({
      name: 'asd',
      position: 2,
      cpu: 'Intel Core i5',
      gpu: 'Nvidia GTX 950M',
      height: '25cm',
      type: 'server'
    });

    for (let i in this.dataSource) {
      this.dataSource[i] = {
        name: '',
        position: (+i + 1),
        cpu: 'Intel Core i5',
        gpu: 'Nvidia GTX 950M',
        height: '25cm',
        type: 'server'
      };
    }
    console.log(this.dataSource);
  }

  editMode(stat) {
    this.edit = stat;
  }


  updateSpace() {
    let count = 0;
    for (const data of this.dataSource) {
      if (data.name.length > 0) {
        count++;
      }
    }
    this.cabinetInfo.space = Math.floor((count * 100) / this.totalcount);
    this.currentwts = Math.floor(this.cabinetInfo.power * 100 / this.totalWts);
  }

  updateCurrentDevice(index) {
    this.cdevice = index - 1;

  }
}




