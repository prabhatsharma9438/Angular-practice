import { Routes } from '@angular/router';
import { Users } from './users/users';

export const routes: Routes = [
    // {path:"" , component: Home},
    // {path:"todos" , component: Todos},
    {
        path: "",
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: "todos",
        loadComponent: () => import('./todos/todos').then(m => m.Todos)
    },
    { path: "users", component: Users },
    { path: "others", component: Users }
];
