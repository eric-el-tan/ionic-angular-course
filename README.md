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
```
$ ionic generate
? What would you like to generate? service
? Name/path of service: recipes/recipes
> ng.cmd generate service recipes/recipes
CREATE src/app/recipes/recipes.service.spec.ts (362 bytes)
CREATE src/app/recipes/recipes.service.ts (136 bytes)
[OK] Generated service!
```

- recipes.service.ts
```
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Pasta_Puttanesca.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatos']
    }
  ];

  constructor() { }

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}

```
- the service class is automatically injected in root, ensure the service can be used application-wide, by any component and page in the application, if the state is changed. the entire application can be updated.
- result is the same, but data has been moved to RecipesService

### 74. [Extracting and Display Route Param Data](https://www.udemy.com/course/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/lecture/13727720#questions)
- 

```
export class RecipeDetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.
  }

}

```
`[routerLink]="['./', recipe?.id]"`

### 76. [Navigating between Pages](https://www.udemy.com/course/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/lecture/13727722#questions/9416383)
- 