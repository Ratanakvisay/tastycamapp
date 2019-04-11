import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './services/auth-guard/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
  /*
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule', canActivate: [AuthGuard] },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: 'add', loadChildren: './pages/place-add/place-add.module#PlaceAddPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'posts', loadChildren: './pages/post-list/post-list.module#PostListPageModule' },
  { path: 'posts/:id', loadChildren: './pages/post-detail/post-detail.module#PostDetailPageModule' },
  { path: 'categories', loadChildren: './pages/category-list/category-list.module#CategoryListPageModule' },
  { path: 'favorites', loadChildren: './pages/favorite-list/favorite-list.module#FavoriteListPageModule', canActivate: [AuthGuard] },
  { path: 'places', loadChildren: './paes/place-list/place-list.module#PlaceListPageModule' },
  { path: 'places/:id', loadChildren: './pages/place-detail/place-detail.module#PlaceDetailPageModule' },
  { path: 'places/:id/reviews', loadChildren: './pages/review-list/review-list.module#ReviewListPageModule' },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
