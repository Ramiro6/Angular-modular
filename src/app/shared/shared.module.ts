import { NgModule } from '@angular/core';


import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [],
    exports: [
        BreadcrumsComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ],
    declarations: [
        BreadcrumsComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ],
    providers: [],
})
export class SharedModule { }
