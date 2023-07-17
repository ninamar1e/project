import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'barkada',
    loadChildren: () => import('./barkada/barkada.module').then( m => m.BarkadaPageModule)
  },
  {
    path: 'frappuccino',
    loadChildren: () => import('./frappuccino/frappuccino.module').then( m => m.FrappuccinoPageModule)
  },
  {
    path: 'kuchi',
    loadChildren: () => import('./kuchi/kuchi.module').then( m => m.KuchiPageModule)
  },
  {
    path: 'variation',
    loadChildren: () => import('./variation/variation.module').then( m => m.VariationPageModule)
  },
  {
    path: 'extras',
    loadChildren: () => import('./extras/extras.module').then( m => m.ExtrasPageModule)
  },
  {
    path: 'premier',
    loadChildren: () => import('./premier/premier.module').then( m => m.PremierPageModule)
  },
  {
    path: 'variations',
    loadChildren: () => import('./variations/variations.module').then( m => m.VariationsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'shopcart',
    loadChildren: () => import('./shopcart/shopcart.module').then( m => m.ShopcartPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'donation',
    loadChildren: () => import('./donation/donation.module').then( m => m.DonationPageModule)
  },
  {
    path: 'hot',
    loadChildren: () => import('./hot/hot.module').then( m => m.HotPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
