import { Component, OnInit } from '@angular/core';
import { appService } from '../services/app.service';

@Component({
  selector: 'app-halloween',
  templateUrl: './halloween.component.html',
  styleUrls: ['./halloween.component.scss']
})
export class HalloweenComponent implements OnInit {

  Quotes : any[];
  Jokes : any[];
  Score : any;

  constructor(private appService: appService) { 
    this.Quotes = appService.Quotes;
    this.Jokes = appService.Jokes;
    this.Score = appService.Score;
  }

  ngOnInit() {
  

    document.body.style.background = " url(../../assets/halloweenBck.jpg)";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize =  "cover";

    this.Score = document.getElementById('appClock').getAttribute('data');
    let appClock = (<HTMLInputElement>document.getElementById('appClock'));
    let wrapPortal = (<HTMLInputElement>document.getElementById('wrapPortal'));
    wrapPortal.style.display = "none";
    appClock.style.background = "black";
    appClock.style.backgroundImage = "url(../../assets/halloweenClock.gif)";
    appClock.style.backgroundRepeat = "no-repeat";
    appClock.style.position = " center";

  }


}
