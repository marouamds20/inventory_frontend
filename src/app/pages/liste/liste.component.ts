import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
    selector: 'liste-cmp',
    moduleId: module.id,
    templateUrl: 'liste.component.html'
})

export class ListeComponent implements OnInit{

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
        this.router.navigateByUrl("liste/add");
    }

    editUser(id){
        console.log(id);
        this.router.navigateByUrl("liste/edit/"+id);
    }

    deleteUser(id){
        if (confirm("are you sure ?") == true) {
            this.backend.delete("http://127.0.0.1:8000/api/delete_User/"+id).subscribe((data)=>
        {
            console.log(data)
            window.location.reload();
        });
        }
        
    }
}

