import { Component, OnInit } from '@angular/core';
import { appService } from '../services/app.service';


@Component({
  selector: 'app-kawai',
  templateUrl: './kawai.component.html',
  styleUrls: ['./kawai.component.scss']
})
export class KawaiComponent implements OnInit {
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

    document.body.style.background = " url(../../assets/kawaiBck.jpg)";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize =  "cover";
    
      this.Score = document.getElementById('appClock').getAttribute('data');
      let appClock = (<HTMLInputElement>document.getElementById('appClock'));
      appClock.style.background = "hotpink";
      appClock.style.backgroundImage = "url(../../assets/kawaiClock.gif)";


      setInterval(
        () => {
          let randInt = Math.floor(Math.random()* this.Quotes.length)
          
          let element = document.getElementById("quotesBox");
  
          while(element.textContent === this.Quotes[randInt].quote)
          {
            randInt = Math.floor(Math.random()* this.Quotes.length)
          }
  
  
          let animKeys = ["wooble","flip","rotateIn","zoomIn","rollIn"];
          let colorKeys = ["hotpink","red","#1c52a3"];
          let randomKey = Math.floor(Math.random() * animKeys.length) 
          element.style.color = colorKeys[randomKey];
  
  
          element.textContent = this.Quotes[randInt].quote;
  
          
          element.classList.add("animated");
          element.classList.add(animKeys[randomKey]);
  
          setTimeout(function(){
  
            element.classList.remove(animKeys[randomKey]);
            element.classList.add("hinge");
  
          },10000)
      
        }, 20000);
 

 

     
       
  }

  

}
