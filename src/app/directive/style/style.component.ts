import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PremierService } from 'src/app/premier.service';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css'] , 
  providers: [PremierService]
})
export class StyleComponent implements OnInit {
color='white'; 
bgcolor='lightblue' ;
size='25px'; 
  
changeSize(num: any) {
  console.log(num.value)
this.size =num.value+'px'
}
  constructor(
    private premierService : PremierService ,
    private router :Router, 
    private activateRoute : ActivatedRoute 
    ) { 


  }
loggerMesData() {
  this.premierService.logger('test') ; 
}
goToCv(){
  const link = ['cv'] 
  this.router.navigate(link);
}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(
(params)=> {
  this.color=params['default'] ;
}

    ) ; 
  }

}
