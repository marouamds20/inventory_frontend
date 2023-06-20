import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from "./pages/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuardService } from 'app/shared/services/authguard';
import { NotifService } from "./shared/services/notif.service";
@NgModule({

  declarations: [
    LoginComponent,
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    FormsModule
  ],
  providers: [AuthGuardService ,NotifService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
