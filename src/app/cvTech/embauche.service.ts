import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
 personnes : Personne[] ; 
  constructor() {
    this.personnes=[] ;
   }
 getEmbauchees(): Personne[] {
  console.log("this is the list of persons embauched") ;

  console.log(this.personnes) ;
  return this.personnes ; 
 }

 embaucher(personne : Personne): void {
  const index = this.personnes.indexOf(personne) ; 
  if (index<0){
    this.personnes.push(personne) ;
  }
  else {
    alert(`${personne.name} est déja selectionnée`); 
  }
   
 }

 debaucher(personne:Personne) : void {
  const index = this.personnes.indexOf(personne) ; 
   if(index>=0){
    this.personnes.splice(index,1) ; 
   } {

   }
 }



}
