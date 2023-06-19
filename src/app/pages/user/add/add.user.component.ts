import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'add-user-cmp',
    moduleId: module.id,
    templateUrl: 'add.user.component.html'
})

export class AddUserComponent implements OnInit{
    name = "";
    email = "";
    password = "";
    constructor(private backend:HttpClient, private router: Router){

    }

    refreshPage() {
        this.router.navigateByUrl('/user', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.router.url]);
        });
      }
      
    ngOnInit(){
    
    }

    addUser(){
        
    }
    save(){
        let user = {
          name : this.name,
          email : this.email,
          password : this.password
        }
        this.backend.post("http://127.0.0.1:8000/api/create_User", user).subscribe((data)=>{
          console.log(data)
          this.router.navigateByUrl("user");
      });
    }


}
