import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
@Input() filsProp: any ; 
@Output() sendRequestToData = new EventEmitter() ; 
  constructor() { }

  ngOnInit(): void {
    console.log("filsComp : voici le contenu de mon pére : ",this.filsProp)
  }
  sendEvent() {
    console.log("ggg")
    this.sendRequestToData.emit(
      'please can i have money :)'
    )
  }

}
