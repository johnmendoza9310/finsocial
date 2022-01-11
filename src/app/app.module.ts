import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';
import { RouterModule } from '@angular/router';
import { SupplierDataComponent } from './components/supplier-data/supplier-data.component';
import { SupplierTermsComponent } from './components/supplier-terms/supplier-terms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SupplierFormComponent,
    SupplierDataComponent,
    SupplierTermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
