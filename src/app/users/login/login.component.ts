import { Component, OnInit } from '@angular/core';
import { ToasterService } from './../../toaster-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:any;
  public password:any;
  constructor(private toastr:ToasterService,public router: Router) { }


  ngOnInit() {
  }

  public goToSignUp: any = ()=> {
    this.router.navigate(['/sign-up'])
  }

  public signinFunction: any = () =>{
    if(!this.email)
    {
      this.toastr.Warning('Enter your email id');
    }
    else if (!this.password)
    {
      this.toastr.Warning('Enter your password');
    }
    else{
      let data = {
        email:this.email,
        password:this.password
      };

      
    }
  }

}
