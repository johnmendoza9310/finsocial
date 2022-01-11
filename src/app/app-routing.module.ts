import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierDataComponent } from './components/supplier-data/supplier-data.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';

const routes: Routes = [

  { path: 'supplier-form', component: SupplierFormComponent},
  { path: 'supplier-data', component: SupplierDataComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'supplier-form' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
