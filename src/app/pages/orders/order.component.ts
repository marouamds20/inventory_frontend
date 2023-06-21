import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
    selector: 'order-cmp',
    moduleId: module.id,
    templateUrl: 'order.component.html'
})

export class OrderComponent implements OnInit{

    constructor(private router:Router, private backend:HttpClient){

    }
    orders :any = [];
    ngOnInit(){
        this.backend.get("http://127.0.0.1:8000/api/select_all_order").subscribe((data)=>
        {
            this.orders = data;
            console.log(data)
        });
    }

   addOrder(){
        this.router.navigateByUrl("order/add");
    }
    imprimer(order_number) {
        window.open("http://127.0.0.1:8000/api/pdf_order/"+order_number);
      }
      

    editOrder(order_number){
        console.log(order_number);
        this.router.navigateByUrl("order/edit/"+order_number);
    }

    deleteOrder(order_number){
        if (confirm("are you sure ?") == true) {
            this.backend.delete("http://127.0.0.1:8000/api/delete_order/"+order_number).subscribe((data)=>
        {
            console.log(data)
            window.location.reload();
            // tva date creation date modification description 

            
        });
        }
        
    }


}