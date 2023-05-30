import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'add-product-cmp',
    moduleId: module.id,
    templateUrl: 'add.product.component.html'
})

export class AddProductComponent implements OnInit{
    code = "";
    sku = "";
    name = "";
    description = "";
    quantite = 0;
    price = 0;
    tva = 0;
    date_expiration = "";

    constructor(private backend:HttpClient, private router: Router){

    }

    refreshPage() {
        this.router.navigateByUrl('/product', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.router.url]);
        });
      }
      
    ngOnInit(){
    
    }

    addProduct(){
        
    }
    save(){
        let product = {
            code : this.code,
            sku : this.sku,
            name : this.name,
           description :  this.description,
           quantite : this.quantite,
           price : this.price,
           tva : this.tva,
          date_expiration : this.date_expiration
        }
        this.backend.post("http://127.0.0.1:8000/api/create_produit", product).subscribe((data)=>console.log(data));
    }


}
