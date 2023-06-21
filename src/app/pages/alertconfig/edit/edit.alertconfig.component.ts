import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
    selector: 'edit-alertconfig-cmp',
    moduleId: module.id,
    templateUrl: 'edit.alertconfig.component.html'
})

export class EditAlertconfigComponent implements OnInit{
    quantite_min = "";
    min_dure = "";
    id_product = "";
    id = "";
    products:any = [];

    constructor(private backend:HttpClient, private router: Router, private activeroot:ActivatedRoute){

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
      this.id = this.activeroot.snapshot.paramMap.get('id');
      this.backend.get("http://127.0.0.1:8000/api/get_alertconfig_byId/"+this.id).subscribe((data:any)=>
      {
        console.log(data);
        this.quantite_min = data.quantite_min;
        this.min_dure = data.min_dure;
      }
      );

    }

    addalertconfig(){
        
    }
    save(){
        let alertconfig = {
            quantite_min : this.quantite_min,
            min_dure : this.min_dure,
            id_product : this.id_product,
        }
        this.backend.put("http://127.0.0.1:8000/api/update_alertconfig/"+this.id, alertconfig).subscribe((data)=>{
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
