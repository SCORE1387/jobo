import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ClarityModule} from 'clarity-angular';
import {AppComponent} from './app.component';
import {ROUTING} from "./app.routing";

import {VacanciesComponent} from './vacancies/vacancies.component';
import {LoginComponent} from "./login/login.component";
import {SiteLayoutComponent} from "./_layout/site-layout/site-layout.component";
import {SiteHeaderComponent} from "./_layout/site-header/site-header.component";
import { MissionComponent } from './mission/mission.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import {SubNavComponent} from "./_layout/site-header/sub-nav/sub-nav.component";
import {HeaderSearchComponent} from "./_layout/site-header/header-search/header-search.component";
import {SiteFooterComponent} from "./_layout/site-footer/site-footer.component";
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';

declare let require: any;

@NgModule({
    declarations: [
        AppComponent,
        VacanciesComponent,
        LoginComponent,
        SiteLayoutComponent,
        SiteHeaderComponent,
        SubNavComponent,
        HeaderSearchComponent,
        MissionComponent,
        VacancyComponent,
        SiteFooterComponent,
        AdvancedSearchComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
