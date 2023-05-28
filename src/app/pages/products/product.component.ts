import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'product-cmp',
    moduleId: module.id,
    templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit{

    constructor(private router:Router){

    }
    
    ngOnInit(){
    
    }

    addProduct(){
        this.router.navigateByUrl("product/add");
    }


}
