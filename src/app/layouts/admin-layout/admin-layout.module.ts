import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { ListeComponent } from 'app/pages/liste/liste.component';
import { AddListeComponent }            from '../../pages/liste/add/add.liste.component';
import { EditListeComponent }            from '../../pages/liste/edit/edit.liste.component';

import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { AddProductComponent }         from '../../pages/products/add/add.product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent }         from '../../pages/products/product.component';
import { OrderComponent }         from '../../pages/orders/order.component';
import { AddOrderComponent }         from '../../pages/orders/add/add.order.component';
import { EditProductComponent }         from '../../pages/products/edit/edit.product.component';
import { CategorieComponent }         from '../../pages/categories/categorie.component';
import { AddCategorieComponent }         from '../../pages/categories/add/add.categorie.component';
import { EditCategorieComponent }         from '../../pages/categories/edit/edit.categorie.component';
import { EditOrderComponent }         from '../../pages/orders/edit/edit.order.component';
import { AlertconfigComponent }         from '../../pages/alertconfig/alertconfig.component';
import { AddAlertconfigComponent }         from '../../pages/alertconfig/add/add.alertconfig.component';
import { EditAlertconfigComponent }         from '../../pages/alertconfig/edit/edit.alertconfig.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [
    
    DashboardComponent,
    UserComponent,
    ListeComponent,
    AddListeComponent,
    EditListeComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    AddOrderComponent,
    AddProductComponent,
    ProductComponent,
    OrderComponent,
    EditProductComponent,
    CategorieComponent,
    AddCategorieComponent,
    EditCategorieComponent,
    EditOrderComponent,
    AlertconfigComponent,
    AddAlertconfigComponent,
    EditAlertconfigComponent,
  ]
})

export class AdminLayoutModule {}
