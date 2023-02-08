import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit{

  appareilName = 'Raclette';
  appareilStatus = 'Eteint';

  constructor(){ }

  ngOnInit(): void {
    
  }

  getStatus(){
    return this.appareilStatus;
  }

  getName(){
    return this.appareilName;
  }
}
