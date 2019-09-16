import { Component, OnInit } from '@angular/core';
import { appService } from '../services/app.service';

@Component({
  selector: 'app-cmd',
  templateUrl: './cmd.component.html',
  styleUrls: ['./cmd.component.scss']
})
export class CmdComponent implements OnInit {

  constructor() {
    
    document.body.onkeyup = function(e){



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
   
      else
     {
       alert('nope')
     }
      
   };

  }

  ngOnInit() {
  }



}
