import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../core/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '/', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      // { path: 'login', loadChildren: './login/login.module#LoginModule' },
      // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
      // { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotpasswordModule' },
      { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusModule' },
      { path: 'services', loadChildren: './services/services.module#ServicesModule' },
      { path: 'contactus', loadChildren: './contact/contact.module#ContactModule' },
      { path: 'hirecar', loadChildren: './hirecar/hirecar.module#HirecarModule' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'product', loadChildren: './product/product.module#ProductModule' },
      { path: 'product/:id', loadChildren: './product/product.module#ProductModule' },
      { path: 'recipe', loadChildren: './recipe/recipe.module#RecipeModule' },
      { path: 'recipe/product/:id', loadChildren: './recipe/recipe.module#RecipeModule' },
      { path: 'order', loadChildren: './order/order.module#OrderModule' },
      { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
      { path: 'success', loadChildren: './success/success.module#SuccessModule' },
      { path: 'myprofile', loadChildren: './myprofile/myprofile.module#MyprofileModule' },
      { path: 'addrating/:id', loadChildren: './addrating/addrating.module#AddratingModule' },
      { path: 'bookcar', loadChildren: './bookcar/bookcar.module#BookcarModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
