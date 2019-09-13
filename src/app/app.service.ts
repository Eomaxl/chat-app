import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Cookie } from 'ng2-cookies';
import { catchError } from 'rxjs/operators';

// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/toPromise';
import { HttpClient,HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'https://chatapi.edwisor.com';

  constructor(private http:HttpClient) {

   }


   public setUserInfoInLocalStorage = (data) => {
     localStorage.setItem('userInfo',JSON.stringify(data))
   }


   public getUserInfoFromLocalStorage = () =>{
     return JSON.parse(localStorage.getItem('userInfo'));
   }

   public signupFunction(data) : Observable<any>{
     const params = new HttpParams()
                    .set('firstName',data.firstName)
                    .set('lastName',data.lastName)
                    .set('mobile',data.mobile)
                    .set('email',data.email)
                    .set('password',data.password)
                    .set('apiKey',data.apiKey);

    return this.http.post(`${this.url}/api/v1/users/signup`,params);
   }    // end of signupFunction function.


   public signinFunction(data): Observable<any>{
     const params = new HttpParams()
                    .set('email',data.email)
                    .set('password',data.password);

      return this.http.post(`${this.url}/api/v1/users/login`,params);
   }  //end of signinFunction function

   public handleError(err:HttpErrorResponse){
     let errorMessage ='';

     if(err.error instanceof Error)
     {
       errorMessage = ` An error has occured : ${err.error.message}`;
     }
     else
     {
       errorMessage = ` Server has returned a status code ${err.status} , error message is: ${err.message}`;
     }

     console.error(errorMessage);
     return Observable.throw(errorMessage);
   }  // end of handleError function

  //  public logout:Observable<any>{
  //    const params = new HttpParams
  //                   .set('authToken',Cookie.get('authToken'));
  //     return this.http.post(`${this.url}/api/v1/users/logout`,params);

  //  }// end of logout function
}
