import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { CreateRoleComponent } from 'src/app/pages/UserAndRoles/create-role/create-role.component';
import { CreateUserComponent } from 'src/app/pages/UserAndRoles/create-user/create-user.component';
import { RoleListComponent } from 'src/app/pages/UserAndRoles/role-list/role-list.component';
import { UserListComponent } from 'src/app/pages/UserAndRoles/user-list/user-list.component';
import { CreateComponent } from 'src/app/pages/priority/create/create.component';
import { CreateTicketComponent } from 'src/app/pages/tickets/create-ticket/create-ticket.component';
import { ListComponent } from 'src/app/pages/tickets/list/list.component';




@NgModule({
  declarations: [
    DashboardComponent,
    CreateTicketComponent,
    CreateComponent,
    CreateUserComponent,
    ListComponent,
    UserListComponent,
    CreateRoleComponent,
    RoleListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ]
})
export class AdminLayoutModule { }
