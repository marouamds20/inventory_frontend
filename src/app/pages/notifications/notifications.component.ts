import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'notifications-cmp',
    moduleId: module.id,
    templateUrl: 'notifications.component.html'
})

export class NotificationsComponent implements OnInit{

    constructor(private router:Router, private backend:HttpClient){

    }
    alerts :any = [];
    ngOnInit(){
        this.backend.get("http://127.0.0.1:8000/api/select_all_alert").subscribe((data)=>
        {
            this.alerts = data;
            console.log(data)
        });
    }

    deletealert(id){
        if (confirm("are you sure ?") == true) {
            this.backend.delete("http://127.0.0.1:8000/api/delete_alert/"+id).subscribe((data)=>
        {
            console.log(data)
            window.location.reload();
        });
        }
        
    }
}
