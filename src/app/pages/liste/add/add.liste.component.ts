import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
    selector: 'add-liste-cmp',
    moduleId: module.id,
    templateUrl: 'add.liste.component.html'
})

export class AddListeComponent implements OnInit{
    name = "";
    email = "";
    password = "";
    role = "";
    constructor(private backend:HttpClient, private router: Router){

    }

    refreshPage() {
        this.router.navigateByUrl('/liste', { skipLocationChange: false }).then(() => {
          this.router.navigate([this.router.url]);
        });
      }
      
    ngOnInit(){
    
    }

    addUser(){
        
    }
    save(){
      if (
        this.name === '' ||
        this.email === '' ||
        this.password === '' ||
        this.role === ''
      ) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please fill in all the fields',
        });
        return; // Stop execution if any field is empty
      }
        let user = {
          name : this.name,
          email : this.email,
          password : this.password,
          role : this.role
        }
        this.backend.post('http://127.0.0.1:8000/api/create_User', user).subscribe((data) => {
    console.log(data);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      this.router.navigateByUrl('user');
    });
  },
  (error) => {
    if (error.status === 400 && error.error.message === 'user already exists') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'user already exists',
      }).then(() => {
        window.location.reload();
    });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'user already exists',
      }).then(() => {
        window.location.reload();
    });
      
    }

  }
);
    }


}
