
import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { DepartmentsModule }       from './departments/departments.module';

import { AppComponent }      from './app.component';
import { HomeComponent }     from './home.component';
import { NavBarComponent }   from './navbar.component';
import { NotFoundComponent } from './not-found.component';

import { departmentsRouting }      from './departments/departments.routing';
import { routing }           from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        DepartmentsModule,
        departmentsRouting,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        NotFoundComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { 
}