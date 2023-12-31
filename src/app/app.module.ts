import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CharactersComponent} from "./characters.component";
import { TestComponent } from './test/test.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FooComponent,
    BarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CharactersComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
