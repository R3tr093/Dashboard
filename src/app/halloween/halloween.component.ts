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
  Boxs = [
    {
      id : "1",
      title: "Un titre 1",
      link: "Un lien 1"
    },
    {
      id:  "2",
      title: "Un titre 2",
      link: "Un lien 2"
    },
    {
      id: "3",
      title: "Un titre 3",
      link: " Un lien 3"
    },
    {
      id: "4",
      title: "Un titre 4",
      link: "Un lien 4"
    },
    {
      id: "5",
      title: "Un titre 5",
      link: "Un lien 5"
    },
    {
      id: "6",
      title: "Un titre 6",
      link: " Un lien 6"
    }
    

  ]
  

 

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
