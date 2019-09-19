import { Component, OnInit } from '@angular/core';
import { appService } from '../services/app.service';
import { element } from 'protractor';


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
      let wrapPortal = (<HTMLInputElement>document.getElementById('wrapPortal'));
      wrapPortal.style.display = "none";
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


        function octoKawai() {
          let elem = document.getElementById("octoKawai");   
          
          let posTop = -20;

          let posLeft = -20;
          
          let animeID = setInterval(frame, 150);
          
          function frame() {
            if (posTop == 95 && posLeft == 95)
            {
              clearInterval(animeID);
              
              let animeID2 = setInterval(frame2,110)

              let posTop = 95;

              function frame2(){

                if(posTop === -20)
                {
                  clearInterval(animeID2);
                  
                  let animeID3 = setInterval(frame3,120)

                  let posLeft = 95;

                  function frame3(){

                    if(posLeft === 50)
                    {
                      clearInterval(animeID3)

                      setTimeout(function(){

                        octoKawai();

                      },20000)

                    }

                    else
                    {
                      posLeft--;

                      if(posLeft % 3 === 0)
                      {
                        elem.style.top = -18 + "%";
                      }

                      else
                      {
                        elem.style.top = -22 + "%";
                      }

                      elem.style.left = posLeft + '%'; 

                    }

                  }

                }

                else
                {
                  posTop--;
                  elem.style.top = posTop + '%'; 
                }

              }
            } 

            else 
            {
              posTop++;
              posLeft++; 
              elem.style.top = posTop + '%'; 
              elem.style.left = posLeft + '%'; 
            }
          }
        }
        
        octoKawai();

        function rocketKawai(){
          let elem = document.getElementById("rocketKawai"); 
          
          let baseHeight = Number(elem.style.height);
          

          let posLeft = -21;

          let animeID = setInterval(frame,30)
          let animeID2 = null;

          function frame(){

            if (posLeft === 199)
            {
               clearInterval(animeID);


               
               setTimeout(function(){

                 animeID2 = setInterval(frame2,50)

               },9000)

               
               
              let posTop = -21;
              let posLeft = 199;

               function frame2()
               {
                
                if(posLeft === 1 && posTop === 68)
                {
                  clearInterval(animeID2);
                }

                if(posLeft > 1)
                {
                  posLeft = posLeft - 2;

                  elem.style.left = posLeft + "vh";
                  
                }

                if(posTop < 68)
                {
                  posTop++;
                  elem.style.top = posTop + "vh";
                }
                


               }
            }

            else
            {
              posLeft++;

              elem.style.left = posLeft + "vh";

            }

          }
          
         
          
        }

        rocketKawai();
  }
}


