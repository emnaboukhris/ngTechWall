import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  errorMessage=''; 
  constructor(private cvService: CvService , 
    private router :Router
    ) { }

  ngOnInit(): void {
  }

  addPersonne(formulaire:NgForm){
   this.cvService.addPersonne(formulaire.value).subscribe(

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
