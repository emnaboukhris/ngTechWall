import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 personne! : Personne ; 
 errorMessage : string = '';
  constructor(
    private cvService :CvService,
    private activatedRoute :ActivatedRoute , 
    private router :Router 
  ) { }

  ngOnInit(): void {
    console.log("this is detail component") 
    this.activatedRoute.params.subscribe(
    (params)=> {
      console.log(params); 
this.cvService.getPersonneById(params['id']).subscribe(
(response)=>{
  this.personne = response ; 
},
(error)=>{
  this.errorMessage="probleme de connexion à votre serveur" ; 

}
)

    } 
    )
    console.log(this.personne);

  }



  updatePersonne(id :number) {
    const link =['cv/update',id]

    this.router.navigate(link ) ; 

  }
  deletePersonne(){
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (response)=>{
        alert("cette personne a été supprimé avec succès")
        const link =['cv']

        this.router.navigate(link)

      }, 
      (error)=>{
this.errorMessage ="il a une error dans votre serveur"
        
      }
    ) 
  }

}
