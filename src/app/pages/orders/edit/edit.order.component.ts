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

    constructor(private backend:HttpClient, private router: Router, private activeroot:ActivatedRoute){

    }

    refreshPage() {
        this.router.navigateByUrl('/order', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.router.url]);
        });
      }
      
    ngOnInit(){
      this.id = this.activeroot.snapshot.paramMap.get('id');
      this.backend.get("http://127.0.0.1:8000/api/get_order_byId/"+this.id).subscribe((data:any)=>
      {
        console.log(data);
        this.order_number = data.order_number;
        this.totale = data.totale;
        this.subTotale = data.subTotale;
      }
      );

    }

    addOrder(){
        
    }
    save(){
        let order = {
          order_number  : this.order_number,
          totale : this.totale,
          subTotale : this.subTotale
        }
        this.backend.put("http://127.0.0.1:8000/api/update_order/"+this.id, order).subscribe((data)=>{
          console.log(data)
          this.router.navigateByUrl("order");
      });
    }


}
