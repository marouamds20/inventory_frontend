import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { json } from 'stream/consumers';



@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit{
    user = '';
    email = '';
    password = '';
    


    constructor(private backend:HttpClient, private router: Router){
    }
    ngOnInit(): void {
        
    }
    login(){
        let user = {
            email : this.email,
            password :this.password
        }
        this.backend.post("http://127.0.0.1:8000/api/login", user).subscribe((data)=>{
            if(data != null){
                localStorage.setItem("user", JSON.stringify(data));
                console.log(data)
                this.router.navigateByUrl("product");
            }
            else{
                alert("utilisateur n'existe pas");
            }
         
      });
    }
}
