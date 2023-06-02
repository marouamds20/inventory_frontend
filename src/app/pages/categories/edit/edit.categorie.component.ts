import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'edit-Categorie-cmp',
    moduleId: module.id,
    templateUrl: 'edit.categorie.component.html'
})

export class EditCategorieComponent implements OnInit{
    name = "";
    id = "";

    constructor(private backend:HttpClient, private router: Router, private activeroot:ActivatedRoute){

    }

    refreshPage() {
        this.router.navigateByUrl('/categorie', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.router.url]);
        });
      }
      
    ngOnInit(){
      this.id = this.activeroot.snapshot.paramMap.get('id');
      this.backend.get("http://127.0.0.1:8000/api/get_categorie_byId/"+this.id).subscribe((data:any)=>
      {
        console.log(data);
        this.name = data.name;
      }
      );

    }

    addCategorie(){
        
    }
    save(){
        let categorie = {
            name : this.name,
        }
        this.backend.put("http://127.0.0.1:8000/api/update_categorie/"+this.id, categorie).subscribe((data)=>{
          console.log(data)
          this.router.navigateByUrl("categorie");
      });
    }


}
