import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() anime:any
  constructor() {     }

  ngOnInit(){
    console.log(this.anime)
  }


}
