import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
    selector: 'add-product-cmp',
    moduleId: module.id,
    templateUrl: 'add.product.component.html'
})

export class AddProductComponent implements OnInit{
    categories = {};
    code = "";
    sku = "";
    name = "";
    description = "";
    categorie = "";
    quantite = 0;
    price = 0;
    tva = 0;
    date_expiration = "";

    constructor(private backend:HttpClient, private router: Router){

    }

    refreshPage() {
        this.router.navigateByUrl('/product', { skipLocationChange: false}).then(() => {
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

    addProduct(){

    }
    save() {
      // Check if any field is empty
      if (
          this.code === '' ||
          this.sku === '' ||
          this.name === '' ||
          this.description === '' ||
          this.categorie === '' ||
          this.quantite === 0 ||
          this.price === 0 ||
          this.tva === 0 ||
          this.date_expiration === ''
      ) {
          Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Please fill in all the fields',
          });
          return; // Stop execution if any field is empty
      }
  
      let product = {
          code: this.code,
          sku: this.sku,
          name: this.name,
          description: this.description,
          category_id: this.categorie,
          quantite: this.quantite,
          price: this.price,
          tva: this.tva,
          date_expiration: this.date_expiration,
      };
  
      this.backend.post('http://127.0.0.1:8000/api/create_produit', product).subscribe((data) => {
    console.log(data);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      this.router.navigateByUrl('product');
    });
  },
  (error) => {
    if (error.status === 400 && error.error.message === 'Product already exists') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Product already exists in stock',
      }).then(() => {
        window.location.reload();
    });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Product already exists in stock',
      }).then(() => {
        window.location.reload();
    });
      
    }

  }
);

  }
  
    

}
