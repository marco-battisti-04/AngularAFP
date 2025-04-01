import { Routes } from '@angular/router';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { NotfoundpageComponent } from '../components/notfoundpage/notfoundpage.component';
import { SearchpageComponent } from '../components/searchpage/searchpage.component';
import { DetailpageComponent } from '../components/detailpage/detailpage.component';
import { FilmlibrarypageComponent } from '../components/filmlibrarypage/filmlibrarypage.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomepageComponent,
        pathMatch: 'full'
    },
    {
        path: 'search/:query',
        component: SearchpageComponent
    },
    {
        path: 'library',
        component: FilmlibrarypageComponent
    },
    {
        path: 'library/:query',
        component: FilmlibrarypageComponent
    },
    {
        path: 'details/:id',
        component: DetailpageComponent
    },
    {
        path: '**',
        component: NotfoundpageComponent
    }
];
