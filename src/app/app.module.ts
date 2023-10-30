import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout/admin-layout.component';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { TopbarModule } from './shared/topbar/topbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { ListComponent } from './pages/priority/list/list.component';
import { CommentsComponent } from './pages/tickets/comments/comments.component';


@NgModule({
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        ListComponent,
        CommentsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, 
        RouterModule.forRoot(AppRoutes,{
            useHash: false
          }),
       
        SidebarModule,
        TopbarModule,
        FooterModule
    ],
  
})
export class AppModule { }
