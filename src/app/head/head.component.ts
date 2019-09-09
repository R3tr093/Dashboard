import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { mainService } from '../services/app.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  Clock: object = new Date();


  constructor(private mainService: mainService) {

    setInterval(
      () => {
        this.Clock = new Date;
      }, 1000
    );
    

   }

  ngOnInit() {
  }

  refreshClock()
  {
    this.Clock = new Date;
    
  }

}
