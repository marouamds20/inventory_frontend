import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ProductComponent } from 'app/pages/products/product.component';
import { AddProductComponent } from 'app/pages/products/add/add.product.component';
import { OrderComponent }         from '../../pages/orders/order.component';
import { AddOrderComponent }         from '../../pages/orders/add/add.order.component';
import { Component } from '@angular/core';


export const AdminLayoutRoutes: Routes = [
    { path: 'product',        component: ProductComponent},
    { path: 'product/add',    component: AddProductComponent},
    { path: 'order',          component: OrderComponent},
    { path: 'order/add',          component: AddOrderComponent},
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
