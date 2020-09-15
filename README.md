# ionic-angular-course

### 65. Setup [create a new ionic angular project](https://www.udemy.com/course/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/lecture/13727692#questions)
- `npm install -g ionic`
- deprecated: `ionic start`
- `ionic start --help`
- `ionic start ionic-angular-course blank`
```
       - Go to your newly created project: cd .\ionic-angular-course
       - Run ionic serve within the app directory to see your app
       - Build features and components: https://ion.link/scaffolding-docs
       - Run your app on a hardware or virtual device: https://ion.link/running-docs
```

`ionic serve` -> > ng.cmd run app:serve --host=localhost --port=8100
 - because ionic.config.json: `"type": "angular"`

 ### 70. [Add and load a new page](https://www.udemy.com/course/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/lecture/13727706#questions)
 - `ionic generate`
 - `page: recipes` 
 - equivalence to `ng g c recipes` or `ng g page recipes`

 - app-routing.module.ts
 - lazy loading means that the code for this module is only fetched when it's readlly needed (i.e. only when the user visits the page)

- old version
```
  {
    path: 'recipes',
    loadChildren: './recipes/recipes.module#RecipesPageModule'
  },
```
- new version
```
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesPageModule)
  },
```
 - loadChildren is a function, which will dynamically import recipe module, then yield a promise; then executed the callback, pass the module and retrieve its RecipesPageModule
```
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```
- `<ion-route-outlet>` is a directive added by `@ionic/angular`, it's NOT a default Ionic web componenet!

### Git tag
- `git tag -a v0.1 -m "version 0.1"`
- `git tag`
- `git tag --list`
- `git push origin v0.1`
- `git push origin --tags`
- `git push -u origin master`

### Git re-tag
- `git tag -d v0.1`
- `git push --delete origin v0.1`

### 71. [Using Angular Feature on Ionic Components](https://www.udemy.com/course/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/lecture/13727710#questions)
- recipes.page.html
```
<ion-content>
  <ion-list>
    <ion-item *ngFor="let recipe of recipes">
      <ion-avatar slot="start">
        <ion-img [src]="recipe.imageUrl"></ion-img>
      </ion-avatar>
      <ion-label>
        {{recipe.title}}
      </ion-label>
    </ion-item>
  </ion-list>
</ion-content>
```

### 72. [Setting up Angular Route](https://www.udemy.com/course/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/lecture/13727714#questions)

```
$ ionic generate page recipes/recipe-detail
CREATE src/app/recipes/recipe-detail/recipe-detail-routing.module.ts (372 bytes)
CREATE src/app/recipes/recipe-detail/recipe-detail.page.html (132 bytes)
CREATE src/app/recipes/recipe-detail/recipe-detail.page.spec.ts (690 bytes)
CREATE src/app/recipes/recipe-detail/recipe-detail.page.ts (283 bytes)
CREATE src/app/recipes/recipe-detail/recipe-detail.page.scss (0 bytes)
UPDATE src/app/recipes/recipes-routing.module.ts (495 bytes)
[OK] Generated page!
```

- update `recipes-routing.module.ts`
```
  {
    path: 'recipe-detail',
    loadChildren: () => import('./recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
  }
```
- dynamic import, then call promise which is lazy loading to detail page module, for details: goto 70.

- app-routing.module.ts
```
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
  }
];
```

- main page: `http://localhost:8100` -> `http://localhost:8100/recipes`
- detail page: `http://localhost:8100/recipes/rrr`

### 73. [Managing State with Services](https://www.udemy.com/course/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/lecture/13727718#questions)
- 