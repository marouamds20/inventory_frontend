import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
        this.router.navigateByUrl('/categorie', { skipLocationChange: true }).then(() => {
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
        let categorie = {
          name : this.name,
          id_parent : this.parent,
        }
        this.backend.post("http://127.0.0.1:8000/api/create_categorie", categorie).subscribe((data)=>{
          console.log(data)
          this.router.navigateByUrl("categorie");
      });
    }


}
