import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
    selector: 'add-alertconfig-cmp',
    moduleId: module.id,
    templateUrl: 'add.alertconfig.component.html'
})

export class AddAlertconfigComponent implements OnInit{
    quantite_min = "";
    min_dure = "";
    id_product = "";
    alertconfig:any = [];
    products:any = [];
    constructor(private backend:HttpClient, private router: Router){

    }

    refreshPage() {
        this.router.navigateByUrl('/alertconfig', { skipLocationChange: false }).then(() => {
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

    addalertconfig(){
        
    }
    save(){
        let alertconfig = {
          quantite_min : this.quantite_min,
          min_dure : this.min_dure,
          id_product : this.id_product,
        }
        this.backend.post("http://127.0.0.1:8000/api/create_alertconfig", alertconfig).subscribe((data)=>{
          console.log(data)
          this.router.navigateByUrl("alertconfig");

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          }).then(()=>{
            this.router.navigateByUrl("alertconfig");
          });

      });
    }


}
