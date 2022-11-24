import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchResult : Personne[]  =[]; 
inputSearch ='' ; 
  constructor(
    private cvService : CvService,
    private router : Router
  ) { }

  ngOnInit(): void {
    
  }
  search() {
    let  name =this.inputSearch ;
    name = name.trim();  
    console.log(name)

    if(name.length){
      this.cvService.findByName(name).subscribe(
        (repnonse)=>{
          console.log(repnonse);
          
          this.searchResult=repnonse ; },
        (error)=>{console.log(error) }) 
    
    }
    else {
      this.searchResult=[] ;
    }
  }

selectPersonne(personne:Personne) {
  const link = ['cv',personne.id] ; 
  this.router.navigate(link)

this.searchResult=[]; 
this.inputSearch=''
  console.log(personne) ; 
}

}
