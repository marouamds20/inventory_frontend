import { Component, OnInit } from '@angular/core';
import { NotifService } from 'app/shared/services/notif.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
async function getRoute(notifs) {
    var ROUTES: RouteInfo[] = [];
    var userinfo = localStorage.getItem("user");
    if ( userinfo != null){
        var user = JSON.parse(userinfo);
        if(user.role == "admin"){
          var cal ="";
          if (notifs>0){
            var cal = "text-red";
          }
            ROUTES = [
                { path: '/product',       title: 'Produit',           icon:'nc-bag-16',     class:''   },
                { path: '/order',         title: 'Commande',          icon:'nc-single-copy-04',     class:''  },
                { path: '/dashboard',     title: 'Tableau de bord',   icon:'nc-chart-pie-36',       class: '' },
                { path: '/categorie',     title: 'Categories',         icon:'nc-tile-56',       class: '' },
                //{ path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
                { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: cal },
                { path: '/user',          title: 'Profile',      icon:'nc-single-02',  class: '' },
                { path: '/liste',         title: 'Utilisateurs',      icon:'nc-badge',  class: '' },
                { path: '/alertconfig',   title: 'Configuration',      icon:'nc-settings-gear-65',  class: '' },
            ]

        }
        else{
            ROUTES = [
                { path: '/product',       title: 'Produit',           icon:'nc-bag-16',     class:''  },
                { path: '/categorie',     title: 'Categories',         icon:'nc-tile-56',       class: '' },
                //{ path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
                { path: '/notifications', title: 'Alertes',     icon:'nc-bell-55',    class: '' },
                { path: '/user',          title: 'Profile',      icon:'nc-single-02',  class: '' },
            ]
        }
    }
    return ROUTES;
}
export const ROUTES: RouteInfo[] = [];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
})

export class SidebarComponent implements OnInit {

  notifs = "";

  constructor(private notif:NotifService){

  }
    public menuItems: any[];

    ngOnInit() {
      this.notif.notifObservable$.subscribe((data)=>{
          this.notifs = data == null ? "": data.length;

          getRoute(this.notifs).then((ROUTES)=>this.menuItems = ROUTES.filter(menuItem => menuItem));

      });
        //getRoute().then((ROUTES)=>this.menuItems = ROUTES.filter(menuItem => menuItem));

    }
}
