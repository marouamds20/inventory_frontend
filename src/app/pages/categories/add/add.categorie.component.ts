import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
    selector: 'add-categorie-cmp',
    moduleId: module.id,
    templateUrl: 'add.categorie.component.html'
})

export class AddCategorieComponent implements OnInit{
    name = "";
    categories:any = [];
    parent = "";
    constructor(private backend:HttpClient, private router: Router){

    }

    refreshPage() {
        this.router.navigateByUrl('/categorie', { skipLocationChange: false }).then(() => {
          this.router.navigate([this.router.url]);
        });
      }
      
      ngOnInit(){
        this.backend.get("http://127.0.0.1:8000/api/select_all_categorie").subscribe((data)=>
        {
            this.categories = data;
            console.log(data)
        });
    }

    addCategorie(){
        
    }
    save(){
      if (
        this.name === '' ||
        this.parent === ''
      ) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please fill in all the fields',
        });
        return; // Stop execution if any field is empty
      }
        let categorie = {
          name : this.name,
          id_parent : this.parent,
        }
        this.backend.post("http://127.0.0.1:8000/api/create_categorie", categorie).subscribe((data)=>{
          console.log(data)
          this.router.navigateByUrl("categorie");

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          }).then(()=>{
            this.router.navigateByUrl("categorie");
          });

      });
    }


}
