import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  Clock = new Date();
  clockHour = this.Clock.getHours();
  clockMinute = this.Clock.getMinutes();
  displayHours = "0";
  


  constructor() {
   }

  ngOnInit() {
    this.Clock = new Date();
       
    this.clockHour = this.Clock.getHours();
    this.clockMinute = this.Clock.getMinutes();
    
    if(Number(this.clockHour <= 9))
    {
      this.displayHours = "0" + String(this.clockHour);
    }

    if(Number(this.clockHour >= 10))
    {
      this.displayHours = String(this.clockHour);
    }

    if(this.clockHour === 24)
    {
      this.displayHours = "0" + String("0");
    }

    if(this.clockHour === 25)
    {
      this.displayHours = "0" + String("1");
    }
    else
    {
      this.displayHours = String(this.clockHour);
    }

    window.addEventListener('DOMContentLoaded', (event) => {
      if(this.clockHour <= 17)
      {
        document.getElementById('appClock').innerHTML = this.displayHours + " : " + String(this.clockMinute) + " <img style='width: 40px;height:auto;position: absolute; top: 20px; left: 20px;' src='../../assets/sun.gif'>";         
      }

      if(this.clockHour >= 18)
      {
        document.getElementById('appClock').innerHTML = this.displayHours + " : " + String(this.clockMinute) + " <img style='width: 40px;height:auto;position: absolute; top: 20px; left: 20px;' src='../../assets/moon.gif'>";         
      }
   });


  setInterval(() => {
    this.Clock = new Date();
   
    this.clockHour = this.Clock.getHours();
    this.clockMinute = this.Clock.getMinutes();
    
    if(Number(this.clockHour <= 9))
    {
      this.displayHours = "0" + String(this.clockHour);
    }

    if(Number(this.clockHour >= 10))
    {
      this.displayHours = String(this.clockHour);
    }


    if(this.clockHour === 24)
    {
      this.displayHours = "0" + String("0");
    }

    if(this.clockHour <= 17)
    {
      document.getElementById('appClock').innerHTML = this.displayHours + " : " + String(this.clockMinute) + " <img style='width: 40px;height:auto;position: absolute; top: 20px; left: 20px;' src='../../assets/sun.gif'>";         
    }

    if(this.clockHour >= 18)
    {
      document.getElementById('appClock').innerHTML = this.displayHours + " : " + String(this.clockMinute) + " <img style='width: 40px;height:auto;position: absolute; top: 20px; left: 20px;' src='../../assets/moon.gif'>";         
    }

    if(this.clockHour === 25)
    {
      this.displayHours = "0" + String("1");
    }
  }, 5000);
}

  clockColors(){


    let randAudio = Math.floor(Math.random()* 7) + 1;

    let audioKey = String(randAudio);

    let audio = new Audio('../assets/' + audioKey + '.wav');
    audio.play();
   
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
