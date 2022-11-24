import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
 personnes!: Personne[]; 
  link = 'http://localhost:3000/api/personnes' ; 
  constructor(private http :HttpClient) { 
this.personnes = [
  new Personne(1 , 'Emna', 'Boukhris', 22,'EmnaBoukhris.jpg',12344566,'Student') , 
  new Personne(2 , 'Imen', 'Boukhris', 24,'rotating_card_profile.png',12344562,'Student') , 
  new Personne(3 , 'Ahmed', 'Boukhris', 14,'rotating_card_profile2.png',12344550,'Student') , 
  new Personne(4 , 'Jamel', 'Boukhris', 56,'',1774550,'Gerant') , 

]

  }
  
  getPersonnes():Observable<Personne[]> {return this.http.get<Personne[]>(this.link); 
}
  getFakePersonnes (){ return this.personnes  }
//   getPersonneById(id:number) :Personne{
// var personne :any= this.personnes.find(
// personne => { return personne.id == id} ) ;
// return personne ; 
// }
getPersonneById(id:number) :Observable<any>{ return this.http.get(this.link+`/${id}`) }

  deletePersonne(id:number) :Observable<any>{ return this.http.delete(this.link+`/${id}`) }

    

    updatePersonne(personne:Personne):Observable<any>{
      console.log("the updated person from cv service is ",personne )
        return this.http.put(this.link,personne)    
       }

 addPersonne(personne:Personne):Observable<any>{
// const token =localStorage.getItem('token') ; 
// if (token) {
//   const params = new HttpParams().set('access_token',token) ; 
//   console.log('this is your token' ,token )
//   return this.http.post(this.link,personne,{params})} ; 
  return this.http.post(this.link,personne)

 }

findByName(name:any):Observable<any> {
  const filter = `{"where":{"name":{"like":"%${name}%"}}}`
  const params = new HttpParams().set('filter',filter)
  return this.http.get<Personne[]>(this.link,{params}) ; 
}


}
