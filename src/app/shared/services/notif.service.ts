import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable()
export class NotifService {

  constructor(private backend:HttpClient){
  }
  _notifObservable: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  get notifObservable$(): Observable<any | null>
  {
      return this._notifObservable.asObservable();
  }

  public  getNotifs(){
    this.backend.get("http://127.0.0.1:8000/api/select_all_alert").subscribe((notifs)=>{
            console.log(notifs);
            this._initNotif(notifs);
        });
  }
  public _initNotif(data: any): void {
    console.log("getting data from notification : " , data );

    this._notifObservable.next(data);
  }


  }
