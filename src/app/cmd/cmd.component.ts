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
          
       let command = document.getElementById('userInput').value; 
        
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
            render.innerHTML = "<p> Play --- this command resume a music </p> <p> stop --- this command pause the current music </p> <p> Play rock --- this command some rock playlist. </p>"
          }

          if(command === "play rock")
          {
            let audio = document.getElementById('audioElt');
            let audioSrc =  '../assets/rock.mp3';
            playMusic(audioSrc,audio);
          

            render.innerHTML = "<p> Music just started !  </p> <p> ♫♫♫ Find this playlist on :: https://www.youtube.com/watch?v=RJB74-q67Ho ♫♫♫</p>";
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
