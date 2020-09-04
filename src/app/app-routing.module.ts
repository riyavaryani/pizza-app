import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {ContactComponent} from './contact/contact.component';

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'contact', component: ContactComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}

