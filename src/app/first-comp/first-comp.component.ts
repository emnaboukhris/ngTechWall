import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {
changeStatus(){
  this.show =!this.show;
}

changeColor(inputValue: { value: any; }){
console.log(inputValue.value); 

this.color = inputValue.value ;
inputValue.value="" ; 
}
processReq(event:any) {
  console.log("message");
  alert(event); 
}

  constructor() { }
color ='yellow'; 
show=false ; 
  ngOnInit(): void {
  }

}
