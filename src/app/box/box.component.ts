import { Component, OnInit, Input } from '@angular/core';
import { appService } from '../services/app.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() index: number;
  @Input() title: string;
  @Input() link:  string;
  boxs : any[];
  


  

  constructor(private appService: appService) {
   }

  ngOnInit() {
    this.boxs = this.appService.Boxs;
  }

  // Write the refresh function here
  refreshBox(){
    
    this.index = this.index + 1;
    alert(this.boxs[0].link)
  
  }


}
