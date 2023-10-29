import { Routes } from "@angular/router";
import { CreateRoleComponent } from "src/app/pages/UserAndRoles/create-role/create-role.component";
import { CreateUserComponent } from "src/app/pages/UserAndRoles/create-user/create-user.component";
import { RoleListComponent } from "src/app/pages/UserAndRoles/role-list/role-list.component";
import { UserListComponent } from "src/app/pages/UserAndRoles/user-list/user-list.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { CreateComponent } from "src/app/pages/priority/create/create.component";
import { ListComponent as PriorityListComponent} from "src/app/pages/priority/list/list.component";
import { CreateTicketComponent } from "src/app/pages/tickets/create-ticket/create-ticket.component";
import { ListComponent as TicketsListComponent  } from "src/app/pages/tickets/list/list.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'create-ticket',      component: CreateTicketComponent },
    { path: 'create-priority',      component: CreateComponent },
    { path: 'priority-list',      component: PriorityListComponent },
 
    { path: 'create-user',      component: CreateUserComponent },
    { path: 'user-list',      component: UserListComponent },
    { path: 'create-role',      component: CreateRoleComponent },
    { path: 'role-list',      component: RoleListComponent },
    { path: 'tickets-list',      component: TicketsListComponent },
];
