import { RouterModule, Routes } from "@angular/router";
import { AddCvComponent } from "./cvTech/add-cv/add-cv.component";
import { CvComponent } from "./cvTech/cv/cv.component";
import { DetailComponent } from "./cvTech/detail/detail.component";
import { UpdateCvComponent } from "./cvTech/update-cv/update-cv.component";
import { StyleComponent } from "./directive/style/style.component";
import { ErrorComponent } from "./error/error.component";
import { LoginGuard } from "./guard/login.guard";
import { LogoutGuard } from "./guard/logout.guard";
import { LoginComponent } from "./login/login.component";
import { ObservableComponent } from "./observable/observable.component";

const APP_ROUTING : Routes = [
    {path:'cv',children :[
        {path:'',component:CvComponent}, 
        {path:'add',component:AddCvComponent,canActivate:[LoginGuard]}, 
        {path:'update/:id',component:UpdateCvComponent,canActivate:[LoginGuard]}, 
        {path:':id',component:DetailComponent,canActivate:[LoginGuard]}, 

    ]}, 
    {path:'login',component:LoginComponent,canActivate:[LogoutGuard]}, 

    {path:'observe',component:ObservableComponent}, 

    {path:'',component:CvComponent}, 
    {path:'color/:default',component:StyleComponent}, 
    {path:'color',redirectTo:'color/red',pathMatch:'full'},
    {path:'**',component:ErrorComponent}

]
export const ROUTING = RouterModule.forRoot(APP_ROUTING) ; 