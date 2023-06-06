import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'add-order-cmp',
    moduleId: module.id,
    templateUrl: 'add.order.component.html'
})

export class AddOrderComponent implements OnInit{
  product = {};
  products = {};
  selectedProduct = [];
    order_number = 0;
    totale = 0;
    subTotale = 0;

    constructor(private backend:HttpClient, private router: Router){

    }

    refreshPage() {
        this.router.navigateByUrl('/order', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.router.url]);
        });
      }
      
      ngOnInit(){
        this.backend.get("http://127.0.0.1:8000/api/select_all_produit").subscribe((data)=>
        {
            this.products = data;
            console.log(data)
        });
    }
    addProduct(){
      this.selectedProduct.push(this.product);
      console.log(this.selectedProduct);
    }
    deleteProd(id){
      console.log(id);
    }
    quantiteChange(index){
      console.log(index);
      let prod = this.selectedProduct[index];
      prod.totale = prod.price * prod.quantiteSelected;
      this.subTotale = 0;
      this.totale = 0;
      this.selectedProduct.map((item)=>{
        this.subTotale = this.subTotale + (item.totale);
        this.totale = this.totale + (item.totale) + ((item.totale * item.tva) / 100 );
      })
    }

    addOrder(){

        
    }
    save(){
        let order = {
            order_number  : this.order_number,
            totale : this.totale,
            subTotale : this.subTotale,
            selectedProduct : this.selectedProduct
        }
        this.backend.post("http://127.0.0.1:8000/api/create_order", order).subscribe((data)=>{
          console.log(data)
          this.router.navigateByUrl("order");
      });
    }


}