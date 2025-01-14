import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
    selector: 'categorie-cmp',
    moduleId: module.id,
    templateUrl: 'categorie.component.html'
})

export class CategorieComponent implements OnInit{

    constructor(private router:Router, private backend:HttpClient){

    }
    categories :any = [];
    ngOnInit(){
        this.backend.get("http://127.0.0.1:8000/api/select_all_categorie").subscribe((data)=>
        {
            this.categories = data;
            this.categories = this.categories.filter((data)=>data.id_parent != 0);
            console.log(data)
        });
    }

    addCategorie(){
        this.router.navigateByUrl("categorie/add");
    }

    editCategorie(id){
        console.log(id);
        this.router.navigateByUrl("categorie/edit/"+id);
    }

    deleteCategorie(id){
        if (confirm("are you sure ?") == true) {
            this.backend.delete("http://127.0.0.1:8000/api/delete_categorie/"+id).subscribe((data)=>
        {
            console.log(data)
            window.location.reload();
        });
        }
        
    }
}
