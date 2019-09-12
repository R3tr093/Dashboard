import { Component, OnInit } from '@angular/core';
import { appService } from '../services/app.service';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  Quotes : any[];
  Jokes : any[];
 
 
  constructor(private appService: appService) {
    this.Quotes = appService.Quotes;
    this.Jokes = appService.Jokes;

    setInterval(
      () => {
        let randInt = Math.floor(Math.random()* this.Quotes.length)
        let element = document.getElementById("quotesBox");

        let animKeys = ["wooble","flip","rotateIn","zoomIn","rollIn"];
        let colorKeys = ["#acd1f9","yellow","#e84a4c","white","cornsilk"];
        let randomKey = Math.floor(Math.random() * animKeys.length) 
        element.style.color = colorKeys[randomKey];
        console.log(colorKeys[randomKey])

        element.textContent = this.Quotes[randInt].quote;
        element.classList.add("animated");
        element.classList.add(animKeys[randomKey]);

        setTimeout(function(){

          element.classList.remove(animKeys[randomKey]);
          element.classList.add("hinge");

        },11000)
    
      }, 14000);


     setInterval(()=>{
       
      let randInt = Math.floor(Math.random()* this.Jokes.length)
      document.getElementById("animeElt").setAttribute("title",this.Jokes[randInt].joke)
     },10000) 

  }

  ngOnInit() {
  }
  

 

}
