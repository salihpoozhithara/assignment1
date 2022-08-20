import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  database:any = {
    1000:{email:"abc@gmail.com",pswd:"abc123"},
    1001:{email:"pqr@gmail.com",pswd:"pqr123"}

  }

  constructor() { }
  login(email:any,pswd:any){
  
    let database=this.database

    if(email in database){
      if(pswd == database[email]["password"]){
        
        //already exist in db
        return true

      }else{
        alert("invalid password")
        return false
      }
    }else{
      alert("user does not exist")
      return false
    }

  }

}
