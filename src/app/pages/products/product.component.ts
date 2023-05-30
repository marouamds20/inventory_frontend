import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'product-cmp',
    moduleId: module.id,
    templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit{

    constructor(private router:Router, private backend:HttpClient){

    }
    products :any = [];
    ngOnInit(){
        this.backend.get("http://127.0.0.1:8000/api/select_all_produit").subscribe((data)=>
        {
            this.products = data;
            console.log(data)
        });
    }

    addProduct(){
        this.router.navigateByUrl("product/add");
    }


}
