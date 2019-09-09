import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Boxs = [
    {
      id : "1"
    },
    {
      id:  "2"
    },
    {
      id: "3"
    },
    {
      id: "4"
    },
    {
      id: "5"
    },
    {
      id: "6"
    }
    

  ]
 
 
  constructor() { }

  ngOnInit() {
  }

 

}
