import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'add-order-cmp',
    moduleId: module.id,
    templateUrl: 'add.order.component.html'
})

export class AddOrderComponent implements OnInit{
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
    
    }

    addOrder(){
        
    }
    save(){
        let order = {
            order_number  : this.order_number,
            totale : this.totale,
            subTotale : this.subTotale,
        }
        this.backend.post("http://127.0.0.1:8000/api/create_order", order).subscribe((data)=>console.log(data));
    }


}