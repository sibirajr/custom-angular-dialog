import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";

// import dialog module
import { DialogModule } from "./modules/dialog/dialog.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DialogModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
