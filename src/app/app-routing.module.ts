import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { NewsComponent } from './news/news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'about' , component : AboutComponent },
  { path : 'product' , component : ProductComponent },
  { path : 'product/:id/:title' , component : ProductDetailComponent },
  { path : 'news' , component : NewsComponent },
  { path: 'register', component: RegisterComponent},
  { path : 'dashboard' , loadChildren : './dashboard/dashboard.module#DashboardModule', canActivate:[ AuthGuard] },
  { path : '**' , component : PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
