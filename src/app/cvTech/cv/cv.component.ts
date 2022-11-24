import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne[] = []; 
  personInput! : Personne ; 
  constructor(private cvService :CvService) { 


  }
  getPerson(person:Personne){
this.personInput=person ; 
  }




  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (personnes)=>{
        this.personnes = personnes ; 
      } , 
      (error) => {
        alert('il y a un probleme les données affichées sont fake ') ; 
        this.personnes = this.cvService.getFakePersonnes() ; 
      }
    ); 

  }

}
