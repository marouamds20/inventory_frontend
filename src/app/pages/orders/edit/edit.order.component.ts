import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'edit-order-cmp',
    moduleId: module.id,
    templateUrl: 'edit.order.component.html'
})

export class EditOrderComponent implements OnInit{
  order_number = 0;
  totale = 0;
  subTotale = 0;
  id = "";
  selectedProduct = [];
  order:any;
  products = {};
  product = {};

    constructor(private backend:HttpClient, private router: Router, private activeroot:ActivatedRoute){

    }

    refreshPage() {
        this.router.navigateByUrl('/order', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.router.url]);
        });
      }
    
    ngOnInit(){
      this.id = this.activeroot.snapshot.paramMap.get('order_number');
        this.backend.get("http://127.0.0.1:8000/api/get_order_byId/" + this.id).subscribe((data:any) => {
          this.order = data.order;
          // Remplir les détails de la commande
          this.totale = this.order.totale;
          this.subTotale = this.order.subTotale;
          this.selectedProduct = data.products;
      
          // Récupérer les produits disponibles
          this.backend.get("http://127.0.0.1:8000/api/select_all_produit").subscribe((productsData) => {
            this.products = productsData;
          });
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
        totale : this.totale,
        subTotale : this.subTotale,
        selectedProduct : this.selectedProduct
    }
    this.backend.post("http://127.0.0.1:8000/api/update_order"+this.order_number, order).subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl("order");
  });
    }


}
