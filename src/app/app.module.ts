import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilsComponent } from './fils/fils.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListecvComponent } from './cvTech/listecv/listecv.component';
import { ItemCVComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginInterceptorProvider } from './interceptors/login.interceptor';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { UpdateCvComponent } from './cvTech/update-cv/update-cv.component';
import { SearchComponent } from './cvTech/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    FilsComponent,
    CvComponent,
    ListecvComponent,
    ItemCVComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailComponent,
    AddCvComponent,
    ErrorComponent,
    LoginComponent,
    ObservableComponent,
    HttpComponent,
    UpdateCvComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ROUTING,
    HttpClientModule
  ],
  providers: [
    LoginInterceptorProvider ,
    LoginGuard, 
    LogoutGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
