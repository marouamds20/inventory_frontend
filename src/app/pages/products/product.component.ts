import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
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

    editProduct(id){
        console.log(id);
        this.router.navigateByUrl("product/edit/"+id);
    }

    deleteProduct(id){
        if (confirm("are you sure ?") == true) {
            this.backend.delete("http://127.0.0.1:8000/api/delete_produit/"+id).subscribe((data)=>
        {
            console.log(data)
            window.location.reload();
            // tva date creation date modification description 
        });
        }
        
    }
}
