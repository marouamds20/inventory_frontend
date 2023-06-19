import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/product',       title: 'Produit',           icon:'nc-bag-16',     class:''  },
    { path: '/order',         title: 'Commande',          icon:'nc-single-copy-04',     class:''  },
    { path: '/dashboard',     title: 'Tableau de bord',   icon:'nc-chart-pie-36',       class: '' },
    { path: '/categorie',     title: 'Categorie',         icon:'nc-tile-56',       class: '' },
    //{ path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
