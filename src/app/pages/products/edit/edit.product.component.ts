import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'edit-product-cmp',
    moduleId: module.id,
    templateUrl: 'edit.product.component.html'
})

export class EditProductComponent implements OnInit{
  categories = {};
  category_id = "";
    code = "";
    sku = "";
    name = "";
    description = "";
    quantite = 0;
    price = 0;
    tva = 0;
    date_expiration = "";
    id = "";

    constructor(private backend:HttpClient, private router: Router, private activeroot:ActivatedRoute){

    }

    refreshPage() {
        this.router.navigateByUrl('/product', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.router.url]);
        });
      }
      
    ngOnInit(){
      this.backend.get("http://127.0.0.1:8000/api/select_all_categorie").subscribe((data)=>
        {
            this.categories = data;
            console.log(data)
        });
      this.id = this.activeroot.snapshot.paramMap.get('id');
      this.backend.get("http://127.0.0.1:8000/api/get_produit_byId/"+this.id).subscribe((data:any)=>
      {
        console.log(data);
        this.code = data.code;
        this.sku = data.sku;
        this.name = data.name;
        this.description = data.description;
        this.quantite = data.quantite;
        this.category_id = data.category_id;
        this.price = data.price;
        this.tva = data.tva;
        this.date_expiration = data.date_expiration;
      }
      );

    }
    

    addProduct(){
        
    }
    save(){
        let product = {
            code : this.code,
            sku : this.sku,
            name : this.name,
           description :  this.description,
           category_id : this.category_id,
           quantite : this.quantite,
           price : this.price,
           tva : this.tva,
          date_expiration : this.date_expiration
        }
        this.backend.put("http://127.0.0.1:8000/api/update_produit/"+this.id, product).subscribe((data)=>{
          console.log(data)
          this.router.navigateByUrl("product");
      });
    }


}
