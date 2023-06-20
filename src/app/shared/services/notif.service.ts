import { BehaviorSubject, Observable } from 'rxjs';

export class NotifService {
  private _notifObservable: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);


  get notifObservable$(): Observable<any | null>
  {
      return this._notifObservable.asObservable();
  }


  public _initNotif(data: any): void {
    this._notifObservable.next(data);
  }


  }
