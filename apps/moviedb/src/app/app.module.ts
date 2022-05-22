import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {HeaderSearchComponent} from "./components/header-search/header-search.component";
import {NarrativeComponent} from "./components/narrative/narrative.component";
import {NarrativeActorsComponent} from "./components/narrative-actors/narrative-actors.component";
import {
  NarrativeActorsElementComponent
} from "./components/narrative-actors-element/narrative-actors-element.component";
import {NarrativeCountriesComponent} from "./components/narrative-countries/narrative-countries.component";
import {
  NarrativeCountriesElementComponent
} from "./components/narrative-countries-element/narrative-countries-element.component";
import {NarrativeListComponent} from "./components/narrative-list/narrative-list.component";
import {NarrativeListElementComponent} from "./components/narrative-list-element/narrative-list-element.component";
import {NarrativeListResultComponent} from "./components/narrative-list-result/narrative-list-result.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    NarrativeComponent,
    NarrativeActorsComponent,
    NarrativeActorsElementComponent,
    NarrativeCountriesComponent,
    NarrativeCountriesElementComponent,
    NarrativeListComponent,
    NarrativeListElementComponent,
    NarrativeListResultComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
