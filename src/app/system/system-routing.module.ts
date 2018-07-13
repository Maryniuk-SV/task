import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SystemComponent } from './system.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { UsersComponent } from "./users/users.component";
import { NotFoundComponent } from "./not-found/not-found.component";


const routes: Routes = [
	{path: 'system', component: SystemComponent, children: [
        {path: 'home', component: HomeComponent},
        {path: 'about', component: AboutComponent},
        {path: 'contact', component: ContactComponent},
        {path: 'users', component: UsersComponent},
        {path: '**', component: NotFoundComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {}