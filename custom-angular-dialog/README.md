## custom-angular-dialog

This is a simple, easy, small, most customizable library for creating dynamic dialogs with angular. This can be easily handled by using a `boolean` with customizable header and body content.

#### Installation

```
$ npm install custom-angular-dialog --save
```

Import `DialogModule` into your AppModule so that your app knows how to render `<app-dialog>`.

```
  import { DialogModule } from 'custom-angular-dialog';
  import { NO_ERRORS_SCHEMA } from "@angular/core";
...
```

```
imports:[
    ...
...
DialogModule,
...
],
schemas: [NO_ERRORS_SCHEMA]
```

Then your app should look something like this:

```
<button (click)="showDialog = !showDialog">Open</button>
<label>Your Fav : {{tDialog}}</label>
<!-- dialog content -->

<app-dialog [(visible)]="showDialog" [width]="20" [height]="20" [headerColor]="'#34a0e7'">
<dialog-header>Alert !</dialog-header>
<dialog-body>
  <input placeholder="Trending Dialog ?" [(ngModel)]="tDialog" type="text" />
  <button (click)="showDialog = !showDialog">Close</button>
</dialog-body>
</app-dialog>
```

#### `<dialog-header>` ,`<dialog-body>`

Both are optional and each can be used alone.

Any HTML tags including `<img>`, `<input>`, etc... can be included inside <dialog-body>

#### Input parameters `[width]` and `[height]`.

Both are optional parameters and is defaulted to `20% both` of whole dialog.

The values should be in `percentage(%)`.

Parameter `[headerColor]`

Color is defaulted to `34a0e7`.

It can be used to set the color of Default header and the color can be in names, or RGB, HEX, HSL, RGBA, HSLA values.

#### Update 3.0.0.

```
<app-dialog [(visible)]="showDialog" [width]="20" [height]="20" [headerColor]="'#34a0e7'" [closable]=true [draggable]=false [anchored]=false [resizable]=false >
....
.....
......
</app-dialog>
```

#### Input parameters `[closable]` ,`[draggable]`, `[anchored]`, `[resizable]`.

`[closable]` - It is property for default header. Close icon can be enabled and disabled using this parameter. Defaulted to `true`.

`[draggable]` - It is also a property of default header. Dialog can be dragged across the screen by dragging the header.It can be helpful when there is a need to read the contents below dialog window by moving it. Defaulted to `false`.

`[anchored]` - The dialog can be anchored to the screen and can only be closed by close icon or by [(visible)] parameter, it cannot be closed by clicking outside the dialog. It is useful when its mandatory to enter values or operations inside dialog. It will be effective when combnined with [closable]=false. Defaulted to `false`.

`[resizable]` - Dialog can be resized by dragging right corner of the dialog.Defaulted to `true`.

All above parameters are optional.Nested and multiple dialog is supported on and above 3.0.0 version.
