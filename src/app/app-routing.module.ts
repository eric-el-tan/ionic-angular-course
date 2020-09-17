import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  }
  , {
    path: 'recipes',
    children: [
      {
        path: '',
        loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesPageModule)
      }
      , {
        path: ':recipeId',
        loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule)
      }
    ]
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutPageModule)
  },
  {
    path: 'layout2',
    loadChildren: () => import('./layout2/layout2.module').then( m => m.Layout2PageModule)
  },
  {
    path: 'layout3',
    loadChildren: () => import('./layout3/layout3.module').then( m => m.Layout3PageModule)
  },
  {
    path: 'ion-label',
    loadChildren: () => import('./ion-label/ion-label.module').then( m => m.IonLabelPageModule)
  },
  {
    path: 'ion-item',
    loadChildren: () => import('./ion-item/ion-item.module').then( m => m.IonItemPageModule)
  },
  {
    path: 'css-table',
    loadChildren: () => import('./css-table/css-table.module').then( m => m.CssTablePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
