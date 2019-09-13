import { Component, OnInit , ViewContainerRef} from '@angular/core';
// import { ToasterService } from './../../toaster-service.service';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from 'ngx-toastr';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public firstName: any;
  public lastName:any;
  public email:any;
  public mobile:any;
  public password:any;
  public apiKey:any;
  constructor( private appService:AppService, private route:Router, public toastr: ToastrService, vcr: ViewContainerRef) {
    //  this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
  }

  public goToSignIn: any = () =>{
    this.route.navigate(['/']);
  }

  public signupFunction : any = ()=>{
    if(!this.firstName)
    {
      this.toastr.warning('Enter the first name');
    }
    else if(!this.lastName)
    {
      this.toastr.warning('Enter the last name');
    }
    else if(!this.mobile)
    {
      this.toastr.warning('Enter the mobile number ');
    }
    else if(!this.email)
    {
      this.toastr.warning('Enter the email');
    }
    else if(!this.password)
    {
      this.toastr.warning('Enter the password');
    }
    else if(!this.apiKey)
    {
      this.toastr.warning('Enter the api key');
    }
    else
    {
      let data = {
        firstName:this.firstName,
        lastName:this.lastName,
        mobile:this.mobile,
        email:this.email,
        password:this.password,
        apiKey:this.apiKey
      };

      //sending this data object to signUpfunction declared in app.service.ts

      this.appService.signupFunction(data)
        .subscribe((apiResponse) => {

          console.log(apiResponse);

          if (apiResponse.status === 200) {

            this.toastr.success('Signup successful');

            setTimeout(() => {

              this.goToSignIn();

            }, 2000);

          } else {

            this.toastr.error(apiResponse.message);

          }

        }, (err) => {

          this.toastr.error('some error occured');

        });

      
    }
  }
}
