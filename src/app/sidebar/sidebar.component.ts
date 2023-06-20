import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
async function getRoute() {
    var ROUTES: RouteInfo[] = [];
    var userinfo = localStorage.getItem("user");
    if ( userinfo != null){
        var user = JSON.parse(userinfo);
        if(user.role == "admin"){
            ROUTES = [
                { path: '/product',       title: 'Produit',           icon:'nc-bag-16',     class:''  },
                { path: '/order',         title: 'Commande',          icon:'nc-single-copy-04',     class:''  },
                { path: '/dashboard',     title: 'Tableau de bord',   icon:'nc-chart-pie-36',       class: '' },
                { path: '/categorie',     title: 'Categorie',         icon:'nc-tile-56',       class: '' },
                //{ path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
                { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
                { path: '/user',          title: 'Profile',      icon:'nc-single-02',  class: '' },
                { path: '/liste',          title: 'Utilisateurs',      icon:'nc-badge',  class: '' },

            ]

        }
        else{
            ROUTES = [
                { path: '/product',       title: 'Produit',           icon:'nc-bag-16',     class:''  },
                { path: '/categorie',     title: 'Categorie',         icon:'nc-tile-56',       class: '' },
                //{ path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
                { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
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
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    ngOnInit() {
        getRoute().then((ROUTES)=>this.menuItems = ROUTES.filter(menuItem => menuItem));
        
    }
}
