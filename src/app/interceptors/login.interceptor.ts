import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";



export class LoginInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token') ; 


                if(token){
                    console.log(req) ; 
                    const keys = req.params.keys() ; 
                    let params = new HttpParams();
                        for(let index = 0 ;index<keys.length ; index++){
                            var test = req.params.get(keys[index]) ??''; 
                            params = params.append(keys[index],test); 
                        }
                    
                    params =params.append('access_token',token);
            const cloneReq = req.clone(
                {
                    params: new HttpParams().set('access_token',token) 
                }, 
            )
            return next.handle(cloneReq) ; 
        } else{
            return next.handle(req) ; 

        }

    }

}

export const LoginInterceptorProvider = {
    provide : HTTP_INTERCEPTORS , 
    useClass : LoginInterceptor , 
    multi : true 
    
}