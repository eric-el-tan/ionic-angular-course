```
etan221@it369948 MINGW64 /c/opt/04-ionic/ionic-angular-course (master)
$ git checkout -b learn/layout
Switched to a new branch 'learn/layout'
```

## Grid
- for composing ui, ordering and layouting
- uses css flexbox
- <ion-grid>
+- <ion-row> - adjust height
+- <ion-col> - adjust width

```
etan221@it369948 MINGW64 /c/opt/04-ionic/ionic-angular-course (learn/layout)
$ ionic generate
? What would you like to generate? page
? Name/path of page: layout
> ng.cmd generate page layout
CREATE src/app/layout/layout-routing.module.ts (347 bytes)
CREATE src/app/layout/layout.module.ts (472 bytes)
CREATE src/app/layout/layout.page.html (125 bytes)
CREATE src/app/layout/layout.page.spec.ts (647 bytes)
CREATE src/app/layout/layout.page.ts (256 bytes)
CREATE src/app/layout/layout.page.scss (0 bytes)
UPDATE src/app/app-routing.module.ts (849 bytes)
[OK] Generated page!

etan221@it369948 MINGW64 /c/opt/04-ionic/ionic-angular-course (learn/layout)
$
```
### 128. [Ionic Grid Basic](https://www.udemy.com/course/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/lecture/13727900#questions)

- http://localhost:8100/layout

```
<ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col>
        Row 1 Col 1
      </ion-col>
    </ion-row>
  </ion-grid>
```
- no padding e.g. show image in full size
- by default the ion-col takes full 12 columns

```
    <ion-row>
      <ion-col>Row 1 Col 1</ion-col>
      <ion-col>Row 1 Col 2</ion-col>
      <ion-col>Row 1 Col 3</ion-col>
      <ion-col>Row 1 Col 4</ion-col>
      <ion-col>Row 1 Col 5</ion-col>
      <ion-col>Row 1 Col 6</ion-col>
      <ion-col>Row 1 Col 7</ion-col>
      <ion-col>Row 1 Col 8</ion-col>
      <ion-col>Row 1 Col 9</ion-col>
      <ion-col>Row 1 Col 10</ion-col>
      <ion-col>Row 1 Col 11</ion-col>
      <ion-col>Row 1 Col 12</ion-col>
      <ion-col>Row 1 Col 13</ion-col>
    </ion-row>
```
- breakpoint will not be usable, if more than 12 columns
- should restrict to less than 12 columns

### 129. [Control Grid Column Sizes](https://www.udemy.com/course/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/lecture/13727902#questions)
```
etan221@it369948 MINGW64 /c/opt/04-ionic/ionic-angular-course (learn/layout)
$ ionic generate
? What would you like to generate? page
? Name/path of page: layout2
> ng.cmd generate page layout2
CREATE src/app/layout2/layout2-routing.module.ts (351 bytes)
CREATE src/app/layout2/layout2.module.ts (479 bytes)
CREATE src/app/layout2/layout2.page.html (126 bytes)
CREATE src/app/layout2/layout2.page.spec.ts (654 bytes)
CREATE src/app/layout2/layout2.page.ts (260 bytes)
CREATE src/app/layout2/layout2.page.scss (0 bytes)
UPDATE src/app/app-routing.module.ts (969 bytes)
[OK] Generated page!
```

- http://localhost:8100/layout2

```
      <ion-row>
        <ion-col size="10">Row 1 Col 1</ion-col>
        <ion-col size="1">Row 1 Col 2</ion-col>
      </ion-row>
```
- size="10" - use 10 columns space

```
      <ion-row>
        <ion-col size="4">Row 1 Col 1</ion-col>
        <ion-col size="4">Row 1 Col 2</ion-col>
      </ion-row>
```
- size="4" - use 4 columns space

```
    <ion-row>
        <ion-col size="4" offset="4">Row 1 Col 1</ion-col>
        <ion-col size="4">Row 1 Col 2</ion-col>
      </ion-row>
```
- offset="4" - the column start after 4 columns space

### 130. [Controlling Grid Alignment](https://www.udemy.com/course/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/lecture/13727906#questions)
- 
```
etan221@it369948 MINGW64 /c/opt/04-ionic/ionic-angular-course (learn/layout)
$ ionic generate
? What would you like to generate? page
? Name/path of page: layout3
> ng.cmd generate page layout3
CREATE src/app/layout3/layout3-routing.module.ts (351 bytes)
CREATE src/app/layout3/layout3.module.ts (479 bytes)
CREATE src/app/layout3/layout3.page.html (126 bytes)
CREATE src/app/layout3/layout3.page.spec.ts (654 bytes)
CREATE src/app/layout3/layout3.page.ts (260 bytes)
CREATE src/app/layout3/layout3.page.scss (0 bytes)
UPDATE src/app/app-routing.module.ts (1090 bytes)
[OK] Generated page!
```
- http://localhost:8100/layout3

```
    <ion-row style="height: 300px">
      <ion-col size="4" offset="2">Row 1 Col 1</ion-col>
      <ion-col size="4">Row 1 Col 2</ion-col>
    </ion-row>
```
- [Responsive Grid Layout](https://ionicframework.com/docs/layout/grid)
- search `default breakpoints`

### [Styling HTML tables with CSS](https://www.youtube.com/watch?v=biI9OFH6Nmg)
- 

```
$ ionic generate
? What would you like to generate? page
? Name/path of page: css-table
> ng.cmd generate page css-table
CREATE src/app/css-table/css-table-routing.module.ts (356 bytes)
CREATE src/app/css-table/css-table.module.ts (488 bytes)
CREATE src/app/css-table/css-table.page.html (128 bytes)
CREATE src/app/css-table/css-table.page.spec.ts (662 bytes)
CREATE src/app/css-table/css-table.page.ts (267 bytes)
CREATE src/app/css-table/css-table.page.scss (0 bytes)
UPDATE src/app/app-routing.module.ts (1470 bytes)
[OK] Generated page!
```
- http://localhost:8200/css-table
