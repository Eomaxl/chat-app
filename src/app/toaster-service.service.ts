import { Injectable } from '@angular/core';
//Declare Toaster Variable
declare var toastr :any;
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { }

  Success(title:string,message?:string){
    toastr.success(title,message);
  }

  Warning(message:string,title?:string){
    toastr.warning(message,title);
  }

  Error(message:string,title?:string){
    toastr.error(message,title);
  }
    
  Info(message:string,title?:string){
    toastr.info(message,title);
  }
  
}

