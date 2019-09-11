import { Component, OnInit } from '@angular/core';
import { appService } from '../services/app.service';

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
 
 
  constructor(private appService: appService) {
    this.Quotes = appService.Quotes;
    console.log(this.Quotes);

    setInterval(
      () => {
        let randInt = Math.floor(Math.random()* this.Quotes.length)

        let element = document.getElementById("quotesBox");
        element.textContent = this.Quotes[randInt].quote;
        element.classList.add("animated");
        element.classList.add("slideInLeft");

        setTimeout(function(){

          element.classList.remove("slideInLeft");

        },2000)
    
      }, 10000
    );

  }

  ngOnInit() {
  }
  

 

}
