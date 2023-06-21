import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{

    constructor(private router:Router, private backend:HttpClient){

    }

    name = "";
    email="";
    role = "";
    ngOnInit(){
      var user = JSON.parse(localStorage.getItem("user"));
      this.name = user.name;
      this.email = user.email;
      this.role = user.role;
    }

    logout(){
      if (confirm("are you sure ?") == true) {
        localStorage.removeItem("user");
        this.router.navigateByUrl("login");
    }
    
}
}

