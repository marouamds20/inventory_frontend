import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { ListeComponent } from 'app/pages/liste/liste.component';
import { AddListeComponent }            from '../../pages/liste/add/add.liste.component';
import { EditListeComponent }            from '../../pages/liste/edit/edit.liste.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { ProductComponent } from 'app/pages/products/product.component';
import { AddProductComponent } from 'app/pages/products/add/add.product.component';
import { OrderComponent }         from '../../pages/orders/order.component';
import { AddOrderComponent }         from '../../pages/orders/add/add.order.component';
import { Component } from '@angular/core';
import { EditProductComponent } from 'app/pages/products/edit/edit.product.component';
import { CategorieComponent }         from '../../pages/categories/categorie.component';
import { AddCategorieComponent }         from '../../pages/categories/add/add.categorie.component';
import { EditCategorieComponent }         from '../../pages/categories/edit/edit.categorie.component';
import { EditOrderComponent }         from '../../pages/orders/edit/edit.order.component';
import { AlertconfigComponent }         from '../../pages/alertconfig/alertconfig.component';
import { AddAlertconfigComponent }         from '../../pages/alertconfig/add/add.alertconfig.component';
import { EditAlertconfigComponent }         from '../../pages/alertconfig/edit/edit.alertconfig.component';



export const AdminLayoutRoutes: Routes = [
    { path: '',        component: ProductComponent},
    { path: 'product',        component: ProductComponent},
    { path: 'product/add',    component: AddProductComponent},
    { path: 'product/edit/:id',    component: EditProductComponent},
    { path: 'order',          component: OrderComponent},
    { path: 'order/add',          component: AddOrderComponent},
    { path: 'order/edit/:order_number',    component: EditOrderComponent},
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'categorie',        component: CategorieComponent},
    { path: 'categorie/add',    component: AddCategorieComponent},
    { path: 'categorie/edit/:id',    component: EditCategorieComponent},
    { path: 'user',           component: UserComponent },
    { path: 'liste',           component:ListeComponent },
    { path: 'liste/add',           component: AddListeComponent },
    { path: 'liste/edit/:id',           component: EditListeComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'alertconfig',        component: AlertconfigComponent},
    { path: 'alertconfig/add',    component: AddAlertconfigComponent},
    { path: 'alertconfig/edit/:id',    component: EditAlertconfigComponent},
];
