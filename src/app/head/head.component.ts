import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { mainService } from '../services/app.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  Clock = new Date();
  clockHour = this.Clock.getHours();


  constructor(private mainService: mainService) {

    setInterval(
      () => {
        this.Clock = new Date;
        this.clockHour = this.Clock.getHours();
    
      }, 1000
    );
    

   }

  ngOnInit() {
  }

  clockColors(){


   
   
    let colors = ["#e83a43","#4cc5ed","#f2e572","#4f4d4d","hotpink"]

    function randomColor(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let random = randomColor(colors.length)

    random = randomColor(colors.length)


    document.getElementById('appClock').style.color = colors[random];
    document.getElementById('appClock').style.boxShadow = " 0px 4px 2px 4.3px " + colors[random];
    document.getElementById('appClock').classList.remove("bounce");
    document.getElementById('appClock').classList.add("shake");
    
    setTimeout(function(){
      document.getElementById('appClock').classList.remove("shake");
    },2000)

    


  }

}
