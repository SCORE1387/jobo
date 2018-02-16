/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {Routes, RouterModule} from '@angular/router';

import {VacanciesComponent} from './vacancies/vacancies.component';
import {LoginComponent} from "./login/login.component";
import {SiteLayoutComponent} from "./_layout/site-layout/site-layout.component";
import {MissionComponent} from "./mission/mission.component";
import {VacancyComponent} from "./vacancy/vacancy.component";
import {AdvancedSearchComponent} from "./advanced-search/advanced-search.component";


export const ROUTES: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
            {path: 'vacancies', component: VacanciesComponent},
            {path: 'vacancy/:id', component: VacancyComponent},
            {path: 'mission', component: MissionComponent},
            {path: 'search', component: AdvancedSearchComponent}
        ]
    },
    {path: 'login', component: LoginComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
