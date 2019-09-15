import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard';
}

document.body.onkeyup = function(e){



   if(e.keyCode === 32)
   {

    let element = document.getElementById('cmd');
    let val = element.style.display;

    console.log(val)

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

  

   
}