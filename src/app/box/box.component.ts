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
    
    let element = document.getElementById(String(this.index))

    

    let randInt = Math.floor(Math.random()* this.boxs.length)

    element.classList.add("animated");

    if(randInt % 2 === 0)
    {
      element.classList.add("flipInX");
    }
    else
    {
      element.classList.add("flipInY");
    }
    


    this.title = this.boxs[randInt].title;

    this.link = this.boxs[randInt].link;

    setTimeout(function(){
      element.classList.remove('flipInX');
      element.classList.remove('flipInY');
    },2000)
  
  }


}
