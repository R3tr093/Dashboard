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
    
    let Allbox = document.getElementsByClassName('boxs');

    let i = 0;

    let randInt = Math.floor(Math.random()* this.boxs.length)

    while(i < Allbox.length - 3)
    {
      if(Allbox[i].getAttribute('id') === String(randInt))
      {
         this.refreshBox();
      }
      
      
      i++;
    }  
    let pureIndex = this.index;

    document.getElementById(String(pureIndex)).classList.add("animated");
    document.getElementById(String(pureIndex)).classList.add("shake");

    this.index = this.boxs[randInt].index;

    this.title = this.boxs[randInt].title;

    this.link = this.boxs[randInt].link;

    setTimeout(function(){

      document.getElementById(String(pureIndex)).classList.remove('shake');
      document.getElementById(String(pureIndex)).setAttribute('id',String(randInt))


    },2000)
  
  }


}
