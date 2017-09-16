import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Home/HomeComponent.component'
import {AboutUsComponent} from './AboutUs/AboutUs.component'
import {GalleryComponent} from './Gallery/Gallery.component'
import {BlogComponent} from './Blog/Blog.component'
import {ContactComponent} from './ContactUs/Contact.component'
import {TreeComponent} from './tree1/tree.component'
import {AddFamilyComponent} from './tree1/addfamily.component'
//import {PageNotFoundComponent} from './FileNotFound/PageNotFound.component'
 
 const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'Home' },
   { path: 'Home', component: HomeComponent },
   { path: 'AboutUs', component: AboutUsComponent },
   { path: 'Gallery', component: GalleryComponent },
   { path: 'Blog', component: BlogComponent },
   { path: 'Tree', component: TreeComponent },
   { path: 'ContactUs', component: ContactComponent },
   { path: 'AddFamily/:parentid', component: AddFamilyComponent },
   { path: '**', component: HomeComponent }
 ];
 
 @NgModule({
   //imports: [RouterModule.forRoot(routes, { useHash: true })],
   imports: [RouterModule.forRoot(routes,{ useHash: false })],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }
// RouterModule.forRoot(yourRoutesHere, { useHash: true })
 export const routingComponents = [HomeComponent,AboutUsComponent,GalleryComponent,BlogComponent,
 TreeComponent,ContactComponent,AddFamilyComponent];
