import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'alertconfig-cmp',
    moduleId: module.id,
    templateUrl: 'alertconfig.component.html'
})

export class AlertconfigComponent implements OnInit{

    constructor(private router:Router, private backend:HttpClient){

    }
    alertconfigs :any = [];
    ngOnInit(){
        this.backend.get("http://127.0.0.1:8000/api/select_all_alertconfig").subscribe((data)=>
        {
            this.alertconfigs = data;
            console.log(data)
        });
    }

    addalertconfig(){
        this.router.navigateByUrl("alertconfig/add");
    }

    editalertconfig(id){
        console.log(id);
        this.router.navigateByUrl("alertconfig/edit/"+id);
    }

    deletealertconfig(id){
        if (confirm("are you sure ?") == true) {
            this.backend.delete("http://127.0.0.1:8000/api/delete_alertconfig/"+id).subscribe((data)=>
        {
            console.log(data)
            window.location.reload();
        });
        }
        
    }
}
