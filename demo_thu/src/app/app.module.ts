import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DepartmentComponent } from './department/department.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service/service.service';
import { DesignComponent } from './design/design.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DepartmentComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
