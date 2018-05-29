import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule }   from '@angular/router';


import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { BannerComponent }  from './banner/banner.component';
import { ContentComponent }  from './content/content.component';
import { CategoryComponent }  from './category/category.component';
import { ProdComponent }  from './prod/prod.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,
RouterModule.forRoot([{path: 'home',component: ContentComponent}]),
RouterModule.forRoot([{path: '',component: ContentComponent}]),
// RouterModule.forRoot([{path: '', redirectTo: '/home', pathMatch: 'full'}]),
RouterModule.forRoot([{path: 'shop/:name',component: CategoryComponent,useHash: true}]),
RouterModule.forRoot([{path: 'product/:cat/:name',pathMatch: 'full',component: ProdComponent}])
 ],
  declarations: [ AppComponent,HeaderComponent,BannerComponent,ContentComponent,CategoryComponent,ProdComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

// Card for cat links
//Cat page/connect with Node/mongo
//Product page
//footer
//cart page
