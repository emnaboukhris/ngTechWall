import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCVComponent implements OnInit {
  @Input() personne!: Personne; 
  @Output() sendPersonneEvent: EventEmitter<any> = new EventEmitter();

  sendPersonne( person: Personne){
    console.log(person) ; 
    this.sendPersonneEvent.emit(person) ;
  } 
  constructor() { }
  ngOnInit(): void {
  }

}
