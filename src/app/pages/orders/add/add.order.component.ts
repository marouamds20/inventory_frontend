import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotifService } from 'app/shared/services/notif.service';
import Swal from 'sweetalert2';
@Component({
    selector: 'add-order-cmp',
    moduleId: module.id,
    templateUrl: 'add.order.component.html'
})

export class AddOrderComponent implements OnInit{
  product = {};
  products = {};
  selectedProduct = [];
    totale = 0;
    subTotale = 0;

    constructor(private backend:HttpClient, private router: Router , private notif:NotifService){

    }

    refreshPage() {
        this.router.navigateByUrl('/order', { skipLocationChange: false }).then(() => {
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
      this.selectedProduct =  this.selectedProduct.filter(x => x.id != id);
    }
    quantiteChange(index){
      console.log(index);
      let prod = this.selectedProduct[index];
      if (prod.quantiteSelected > prod.quantite) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'La quantité sélectionnée est supérieure à la quantité en stock',
        });
        return; // Arrêter l'exécution de la fonction
      }
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
      if (!this.totale || !this.subTotale || this.selectedProduct.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please fill in all the fields',
        });
        return;
      }
        let order = {
            totale : this.totale,
            subTotale : this.subTotale,
            selectedProduct : this.selectedProduct
        }
        this.backend.post("http://127.0.0.1:8000/api/create_order", order).subscribe((data)=>{
          console.log(data);
          this.backend.get("http://127.0.0.1:8000/api/select_all_alert").subscribe((notifs)=>{
            console.log(notifs);
          this.notif._initNotif(notifs);
        });

          this.router.navigateByUrl("order");

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          }).then(()=>{
            this.router.navigateByUrl("order");
          });

      });





    }


}
