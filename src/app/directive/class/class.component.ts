import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
est = false ; 
milan = false ;
barca=false ;  
show=true ; 
teams = [
  'est','om','barca','milan'
]
  constructor() { }
  changeTeam() {
    this.est=!this.est ; 
  }
  ngOnInit(): void {
  }

}
