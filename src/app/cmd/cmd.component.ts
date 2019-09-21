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
            render.innerHTML = "<p> Clear --- This command will erase all the content in this box </p> <p> Play --- this command resume a music </p> <p> stop --- this command pause the current music </p><p> Play rock --- this command play some rock playlist. </p><p> Play creepy --- this command play some creepy playlist  🎃  . </p><p> Play kawai --- this command play some kawai playlist 🏯 </p><p> Play rap --- this command play some rap playlist </p><p> Play christmas --- This command play some christmas songs 🎄🎅🎆</p> <p> Score --- Return you current score  </p><p> Portal kawai --- open a portal to kawai world  </p><p> Portail delete --- Close all portals on the screen.  </p>"
          }

          if(command === "clear")
          {
            render.innerHTML = " "
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
            render.innerHTML = "<p> Music just stopped !  </p>";
            if(audio.getAttribute('src') === "../assets/ponpon.mp3" )
            {
              audio.setAttribute('src',"prout")
            }

            if(document.getElementById('miku') !==  null )
            {
              document.getElementById('miku').setAttribute('src','../../assets/kawaiMiku2.gif')
            }
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
           
            document.getElementById("wrapPortal").style.display = "none";
            
            
          }

          if(command === "portal kawai")
          
          {
            
            if(document.getElementById('halloween') !== null)
            {
              document.getElementById('halloween').style.display = "none";
            }

            if(document.getElementById('main') !== null)
            {
              document.getElementById('main').style.display = "none";
            }

            document.getElementById('spacePortal').style.display = "none";
            document.getElementById('halloweenPortal').style.display = "none";
            document.getElementById('wrapPortal').style.display = "block";
            document.getElementById('tips').textContent = " Portal for kawai world is ready ! ";
            document.getElementById('kawaiPortal').style.display = "block";
            
            document.getElementById('kawaiPortal').addEventListener('click',function(){
             
              hidePortal();

              let badges = document.getElementsByClassName('badgesBoxs');
             
             for(let i = 0; i < badges.length; i++)
             {
              let target = (<HTMLInputElement>document.getElementsByClassName('badgesBoxs')[i]);
              target.style.backgroundImage = "url('../assets/butterfly.gif')";
              target.style.backgroundColor = "white";
              target.style.borderTop = "hotpink 2px solid";
              target.style.boxShadow = " 10px 10px 49px 29px rgba(242,0,0,0.75)";

             
             }
             

            })

            let audioPortal = document.getElementById('audioElt');

            if(audioPortal.getAttribute('src') === "../assets/ponpon.mp3" )
            {
              audioPortal.setAttribute('src',"prout")
            }
        


          }

          if(command === "portal space")
          
          {
            hidePortal();

            if(document.getElementById('kawai') !== null)
            {
              document.getElementById('kawai').style.display = "none";
            }

            if(document.getElementById('halloween') !== null)
            {
              document.getElementById('halloween').style.display = "none";
            }

            document.getElementById('kawai').style.display = "none";
            document.getElementById('halloweenPortal').style.display = "none";
            document.getElementById('wrapPortal').style.display = "block";
            document.getElementById('kawaiPortal').style.display = "none";
            document.getElementById('tips').textContent = " Portal for deep space is ready ! ";
            document.getElementById('spacePortal').style.display = "block";
            
            document.getElementById('spacePortal').addEventListener('click',function(){
             
         
              let badges = document.getElementsByClassName('badgesBoxs');
             
             for(let i = 0; i < badges.length; i++)
             {
              let target = (<HTMLInputElement>document.getElementsByClassName('badgesBoxs')[i]);
              target.style.backgroundImage = "url('../assets/code.jpg')";
              target.style.backgroundColor = "none";
              target.style.borderTop = "cornflowerblue 2px solid";
              target.style.boxShadow = "none";

              let audioPortal = document.getElementById('audioElt');

              if(audioPortal.getAttribute('src') === "../assets/ponpon.mp3" )
              {
                audioPortal.setAttribute('src',"prout")
              }
          

             
             }
             

            })


          }

          if(command === "portal halloween")
          
          {
            hidePortal();

            if(document.getElementById('kawai') !== null)
            {
              document.getElementById('kawai').style.display = "none";
            }

            if(document.getElementById('main') !== null)
            {
              document.getElementById('main').style.display = "none";
            }
           
            document.getElementById('wrapPortal').style.display = "block";
            document.getElementById('kawaiPortal').style.display = "none";
            document.getElementById('spacePortal').style.display = "none";
            document.getElementById('tips').textContent = " Portal for Halloween Town is ready ! ";
            document.getElementById('halloweenPortal').style.display = "block";
            
            document.getElementById('halloweenPortal').addEventListener('click',function(){
             
         
             let badges = document.getElementsByClassName('badgesBoxs');
             
             for(let i = 0; i < badges.length; i++)
             {
              let target = (<HTMLInputElement>document.getElementsByClassName('badgesBoxs')[i]);
              target.style.backgroundImage = "url('../assets/code.jpg')";
              target.style.backgroundColor = "none";
              target.style.borderTop = "red 2px solid";
              target.style.boxShadow = "none";

              let audioPortal = document.getElementById('audioElt');

              if(audioPortal.getAttribute('src') === "../assets/ponpon.mp3" )
              {
                audioPortal.setAttribute('src',"prout")
              }
          

             
             }
             

            })


          }

          if(command === "portal delete")
          {
            let main = document.getElementById('main');

            if(main !== null)
            {
              main.style.display = "flex";        
            }

            let kawai = document.getElementById('kawai');

           if(kawai !== null) 
           {
            kawai.style.display = "flex";         
           }

            document.getElementById('wrapPortal').style.display = "none";
          

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
