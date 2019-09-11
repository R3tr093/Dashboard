import { Component, OnInit, Input } from '@angular/core';
import { appService } from '../services/app.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() index: number;
  @Input() title: string;
  @Input() link:  string;
  boxs : any[];
  


  

  constructor(private appService: appService) {
   }

  ngOnInit() {
    this.boxs = this.appService.Boxs;
  }

  // Write the refresh function here
  refreshBox(){
    
    let randInt = Math.floor(Math.random()* this.boxs.length)

    document.getElementById(String(this.index)).classList.add("animated");
    document.getElementById(String(this.index)).classList.add("shake");

    this.index = this.boxs[randInt].index;

    this.title = this.boxs[randInt].title;

    this.link = this.boxs[randInt].link;
  
  }


}
