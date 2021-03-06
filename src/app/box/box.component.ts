import { Component, OnInit, Input } from '@angular/core';
import { appService } from '../services/app.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss','../kawai/kawai.component.scss','../home/home.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() index: number;
  @Input() title: string;
  @Input() link:  string;
  @Input() pic:  string;
  @Input() tags:  any[];
  boxs : any[];
  lastEntrance : number;
  
  
  


  

  constructor(private appService: appService) {
   }

  ngOnInit() {
    this.boxs = this.appService.Boxs;
    this.pic = this.boxs[this.index].pic;
    this.title = this.boxs[this.index].title;
    this.link = this.boxs[this.index].link;
    this.tags = this.boxs[this.index].tags;

  }

  // Write the refresh function here
  refreshBox(){
    
    let randAudio = Math.floor(Math.random()* 7) + 1;

    let audioKey = String(randAudio);

    let audio = new Audio('../assets/' + audioKey + '.wav');
    audio.play();

    let element = document.getElementById(String(this.index));

    let randInt = Math.floor(Math.random()* this.boxs.length);

    while(this.title === this.boxs[randInt].title)
    {
      randInt = Math.floor(Math.random()* this.boxs.length)
    }

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

    this.pic = this.boxs[randInt].pic;

    this.tags = this.boxs[randInt].tags;

    setTimeout(function(){
      element.classList.remove('flipInX');
      element.classList.remove('flipInY');
    },2000)
  
  }


}
