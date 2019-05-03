import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.scss']
})
export class CctvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  resizeIframe(obj) {
    obj.style.height =  '200px';
  }
}


