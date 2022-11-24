import { Component, OnInit,Input,EventEmitter ,Output} from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-listecv',
  templateUrl: './listecv.component.html',
  styleUrls: ['./listecv.component.css']
})
export class ListecvComponent implements OnInit {
  @Input() personnes :Personne[]=[] ; 
  @Output() SendPersonToDetail: EventEmitter<any> = new EventEmitter();

 constructor() { }
  sendPersonne( person: Personne){
    console.log("personne coming from son :")
    console.log(person) ; 
    this.SendPersonToDetail.emit(person) ;

  } 


  ngOnInit(): void {

  }

}
