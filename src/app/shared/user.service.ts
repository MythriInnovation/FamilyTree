import { Injectable } from '@angular/core';
import {SharedService} from './shared.service'
import {Login} from '../Login/login'
 
@Injectable()
export class UserService 
{
    constructor(private sharedservice:SharedService)
    {

    }

    ValidateUser(usermodel:Login) 
    {
        //this.sharedservice.getServiceWithComplexObjectAsQueryString('',usermodel)
    }
  
}