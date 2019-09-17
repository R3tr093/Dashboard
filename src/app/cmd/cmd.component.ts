import { Component, OnInit } from '@angular/core';
import { appService } from '../services/app.service';

@Component({
  selector: 'app-cmd',
  templateUrl: './cmd.component.html',
  styleUrls: ['./cmd.component.scss']
})
export class CmdComponent implements OnInit {


  userType : any;

  constructor() {
    

      // faire passez un booléen pour gérez le display quand on clique pour entrez une commande
    this.userType = false;

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
   
      }

      
   });

  }

  ngOnInit() {
  }



}
