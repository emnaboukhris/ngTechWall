import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {

  errorMessage=''; 
  personne! : Personne ; 
  constructor(private cvService: CvService , 
    private router :Router, 
    private activatedRoute : ActivatedRoute 
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=> {
  this.cvService.getPersonneById(params['id']).subscribe(
  (response)=>{
    this.personne = response ; 
    console.log("the person to update is ",this.personne); 

  },
  (error)=>{
    console.log(error)
    this.errorMessage="probleme de connexion à votre serveur" ; 
  
  }
  )
  
      } 
      )  }

  updatePersonne(){
    this.cvService.updatePersonne(this.personne).subscribe(
 
     (reponse)=>{
       const link = ['cv'] ; 
       this.router.navigate(link)
 
     }, 
     (error)=>{
 this.errorMessage="probleme de connexion à votre serveur" ; 
     }
     ) ; 
   }

}
