import { Component, OnInit } from '@angular/core';
import { appService } from '../services/app.service';

@Component({
  selector: 'app-cmd',
  templateUrl: './cmd.component.html',
  styleUrls: ['./cmd.component.scss']
})
export class CmdComponent implements OnInit {



  constructor() {
    

  }

  ngOnInit() {


    document.body.addEventListener("keyup", function displayCmd(e){

      document.getElementById('userInput').addEventListener('focus',function(){
        document.body.removeEventListener("keyup", displayCmd);
      });

      document.getElementById('userInput').addEventListener('blur', (e) => {
        document.body.addEventListener("keyup", displayCmd)   
      });
      

      if(e.keyCode === 32)
      {
   
       let element = document.getElementById('cmd');

       let val = element.style.display;
   
   
       if(val === "" || val === "none")
       {
         element.style.display = "block";
       }
   
       else
       {
         element.style.display = "none";
       }

       // Type the command here
       function getCommand(){
          
       let command  = (<HTMLInputElement>document.getElementById('userInput')).value;
        
       command = command.toLowerCase();
       
       let render = document.getElementById('dialogBox');

        
        
      

        function playMusic(src,element) {
          element.src = src;
          element.play();
        }

        function resumeMusic(element){
          element.play();
        }

        function pauseMusic(element) {
          element.pause();
        }

          if(command === "help")
          {
            render.innerHTML = "<p> Play --- this command resume a music </p> <p> stop --- this command pause the current music </p><p> Play rock --- this command play some rock playlist. </p><p> Play creepy --- this command play some creepy playlist  🎃  . </p><p> Play kawai --- this command play some kawai playlist 🏯 </p><p> Play rap --- this command play some rap playlist </p><p> Play christmas --- This command play some christmas songs 🎄🎅🎆</p> <p> Score --- Return you current score  </p><p> Portal kawai --- open a portal to kawai world  </p><p> Portail delete --- Close all portals on the screen.  </p>"
          }

          if(command === "play rock")
          {
            let audio = document.getElementById('audioElt');
            let audioSrc =  '../assets/rock.mp3';
            playMusic(audioSrc,audio);
          

            render.innerHTML = "<p> Music just started !  </p> <p> ♫♫♫ Find this playlist on :: https://www.youtube.com/watch?v=RJB74-q67Ho ♫♫♫</p>";
          }

          if(command === "play rap")
          {
            let audio = document.getElementById('audioElt');
            let audioSrc =  '../assets/rap.mp3';
            playMusic(audioSrc,audio);
          

            render.innerHTML = "<p> ♫♫♫ Music just started !  ♫♫♫</p>";
          }
          
          if(command === "play christmas")
          {
            let audio = document.getElementById('audioElt');
            let audioSrc =  '../assets/christmas.mp3';
            playMusic(audioSrc,audio);
          

            render.innerHTML = "<p> ♫♫♫ 🎄🎅🎆 Music just started, Merry christmas ! 🎄🎅🎆 ♫♫♫</p>";
          }

          if(command === "play creepy")
          {
            let audio = document.getElementById('audioElt');
            let audioSrc =  '../assets/creepy.mp3';
            playMusic(audioSrc,audio);
          

            render.innerHTML = "<p> ♫♫♫ 🎃 Music just started ! 🎃 ♫♫♫</p>";
          }

          if(command === "play kawai")
          {
            let audio = document.getElementById('audioElt');
            let audioSrc =  '../assets/kawai.mp3';
            playMusic(audioSrc,audio);
          

            render.innerHTML = "<p> ♫♫♫ 🏯🈳 Music just started ! 🈳🏯 ♫♫♫</p>";
          }

          if(command === "play")
          {
            
            let audio = document.getElementById('audioElt');
            resumeMusic(audio)
          

            render.innerHTML = "<p> Music just started !  </p>"
          }


          if(command === "stop")
          {            
            let audio = document.getElementById('audioElt');
            pauseMusic(audio);
            render.innerHTML = "<p> Music just stopped !  </p>"
          }

          if(command === "score")
          {            
            let Score = document.getElementById('appClock').getAttribute('data');

            if (Score == null){
              Score = "0";
            }

            render.innerHTML = "<p> You scored   " + String(Score) + "  points 🌟🌟🌟 .</p>"
          }

          function hidePortal() {
           
            document.getElementById("kawaiPortal").style.display = "none";
            
          }
          if(command === "portal kawai")
          
          {
            hidePortal();
            document.getElementById('main').style.display = "none";
            document.getElementById('wrapPortal').style.display = "block";
            document.getElementById('tips').textContent = " Portal for kawai world is ready ! ";
            document.getElementById('kawaiPortal').style.display = "block";
          }

          if(command === "portal delete")
          {
            document.getElementById('main').style.display = "flex";
            document.getElementById('wrapPortal').style.display = "none";
            hidePortal();

          }

         
       }

       element.addEventListener("keyup",function (e) {
        
        if(e.keyCode === 13)
        {
          getCommand();
        }
       
      })
    }

  });

 }
}
