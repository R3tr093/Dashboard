import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kawai',
  templateUrl: './kawai.component.html',
  styleUrls: ['./kawai.component.scss']
})
export class KawaiComponent implements OnInit {

  constructor() {
    document.body.style.background = " url(assets/kawaiBck.jpg)";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize =  "cover";

    window.addEventListener('DOMContentLoaded', (event) => {
      document.body.style.background = " url(assets/kawaiBck.jpg)";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize =  "cover";

      document.getElementById('animeElt').src = "assets/kawaiOctopus.gif";

  });
  }

  ngOnInit() {
   
  }

}
