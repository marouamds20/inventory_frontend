import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'edit-user-cmp',
    moduleId: module.id,
    templateUrl: 'edit.user.component.html'
})

export class EditUserComponent implements OnInit{
    name = "";
    id = "";
    email = "";

    constructor(private backend:HttpClient, private router: Router, private activeroot:ActivatedRoute){

    }

    refreshPage() {
        this.router.navigateByUrl('/user', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.router.url]);
        });
      }
      
    ngOnInit(){
      this.id = this.activeroot.snapshot.paramMap.get('id');
      this.backend.get("http://127.0.0.1:8000/api/get_User_byId/"+this.id).subscribe((data:any)=>
      {
        console.log(data);
        this.name = data.name;
        this.email = data.email;
      }
      );

    }

    addUser(){
        
    }
    save(){
        let user = {
            name : this.name,
            email : this.email,
        }
        this.backend.put("http://127.0.0.1:8000/api/update_User/"+this.id, user).subscribe((data)=>{
          console.log(data)
          this.router.navigateByUrl("user");
      });
    }


}
