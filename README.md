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