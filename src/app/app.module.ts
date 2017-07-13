import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';


import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { IntroComponent } from './intro/intro.component';


import { ExampleDef } from './example.model';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgNonBindableExampleComponent } from './ng-non-bindable-example/ng-non-bindable-example.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { FormWithValidationsExplicitComponent } from './form-with-validations-explicit/form-with-validations-explicit.component';


// Master list

export const examples: ExampleDef[] = [
  { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
  { label: 'NgFor', name: 'NgFor', path: 'ng_for', component: NgForExampleComponent },
  { label: 'NgSwitch', name: 'NgSwitch', path: 'ng_switch', component: null },
  { label: 'NgStyle', name: 'NgStyle', path: 'ng_style', component: null },
  { label: 'NgClass', name: 'NgClass', path: 'ng_class', component: null },
  { label: 'NgNonBindable', name: 'NgNonBindable', path: 'ng_non_bindable', component: null },
  { label: 'FormSku', name: 'FormSku', path: 'form_sku', component: DemoFormSkuComponent },
  { label: 'FormSkuBuilder', name: 'FormSkuBuilder', path: 'form_sku_builder', component: DemoFormSkuWithBuilderComponent },
  { label: 'Validation Explicit', name: 'FormWithValidationsExplicit', path: 'validations-explicit', component: FormWithValidationsExplicitComponent }
]


//Routes

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'ng_for', component: NgForExampleComponent, pathMatch: 'full' },
  { path: 'ng_switch', component: NgSwitchExampleComponent, pathMatch: 'full' },
  { path: 'ng_style', component: NgStyleExampleComponent, pathMatch: 'full' },
  { path: 'ng_class', component: NgClassExampleComponent, pathMatch: 'full' },
  { path: 'ng_non_bindable', component: NgNonBindableExampleComponent, pathMatch: 'full' },
  { path: 'form_sku_builder', component: DemoFormSkuWithBuilderComponent, pathMatch: 'full' },
  { path: 'validations-explicit', component: FormWithValidationsExplicitComponent, pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    IntroComponent,
    NgForExampleComponent,
    NgSwitchExampleComponent,
    NgStyleExampleComponent,
    NgClassExampleComponent,
    NgNonBindableExampleComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    FormWithValidationsExplicitComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }