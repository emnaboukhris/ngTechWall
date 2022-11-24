import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
@Input() person! :Personne; 
errorMessage : string =''; 

  constructor( private embaucheService: EmbaucheService,
    private router :Router, 
    private cvService : CvService
    ) { 

  }

  ngOnInit(): void {
  }

  embaucher(){
    this.embaucheService.embaucher(this.person) 
  }



  moreInfo(){
const link =['cv',this.person.id]
console.log(link) ; 

this.router.navigate(link)
  }
}
