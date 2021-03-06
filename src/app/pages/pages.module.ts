import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {UsersModule} from "./users/users.module";
import { DriversComponent } from './drivers/drivers.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    UsersModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    DriversComponent,
  ],
})
export class PagesModule {
}
