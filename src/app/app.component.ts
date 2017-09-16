import { Component } from '@angular/core';
import {SharedService} from 'app/shared/shared.service'
import {Login} from 'app/Login/login'

// import { RouterLink } from '@angular/router';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SharedService]
})

export class AppComponent {
  profile = {};
  
  public usermodel:Login = new Login();
  public errorMessage:string = "";
  constructor(private userService: SharedService)
  {
   
  }

  // public IsValidCredentials()
  // {
  //     this.userService.GetByJson('',this.usermodel).subscribe(data=>
  //     {
  //         this.profile = data;
  //     });
  //     return false;
  // }
  

  // public IsValidCredentials()
  // {
  //       this.userService.GetByJson('/api/family/validate',this.usermodel).subscribe(result=>
  //        result => 
  //        {
  //           console.log("log" +result);
  //        }),
  //        error => 
  //        {
  //          this.errorMessage = <any>error
  //        };
         
  //     return false;
  // }

  /**
   * name
   */
  public Close(event) {
    debugger;
    window.location.reload();
  }
  
}
