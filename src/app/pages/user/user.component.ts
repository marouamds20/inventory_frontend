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
    users :any = [];
    ngOnInit(){
        this.backend.get("http://127.0.0.1:8000/api/select_all_User").subscribe((data)=>
        {
            this.users = data;
            console.log(data)
        });
    }

    addUser(){
        this.router.navigateByUrl("user/add");
    }

    editUser(id){
        console.log(id);
        this.router.navigateByUrl("user/edit/"+id);
    }

    deleteUser(id){
        if (confirm("are you sure ?") == true) {
            this.backend.delete("http://127.0.0.1:8000/api/delete_user/"+id).subscribe((data)=>
        {
            console.log(data)
            window.location.reload();
        });
        }
        
    }
}
