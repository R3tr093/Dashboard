import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kawai',
  templateUrl: './kawai.component.html',
  styleUrls: ['./kawai.component.scss']
})
export class KawaiComponent implements OnInit {

  constructor() {}

  ngOnInit() {
      document.body.style.background = " url(assets/kawaiBck.jpg)";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize =  "cover";

      let animeElt  = (<HTMLInputElement>document.getElementById('animeElt'));
        
      animeElt.src = "assets/kawaiOctopus.gif";

      let appClock = (<HTMLInputElement>document.getElementById('appClock'));
      appClock.style.background = "hotpink";
      appClock.style.backgroundImage = "url(../../assets/kawaiClock.gif)";
      
      let catEffect = (<HTMLInputElement>document.getElementById('catEffect'));
      catEffect.src = "assets/unicorn.gif";

      let rocketEffect = (<HTMLInputElement>document.getElementById('rocketEffect'));
      rocketEffect.src = "assets/rocketKawai.gif"
      

    
  }

  

}
