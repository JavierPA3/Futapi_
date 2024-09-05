import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PredictionsRoutingModule } from './predictions-routing.module';
import { ExpectedGoalsComponent } from './components/expected-goals/expected-goals.component';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from "../dashboard.module";
import { ExpectedAssistComponent } from './components/expected-assist/expected-assist.component';
import { ExpectedTacklesComponent } from './components/expected-tackles/expected-tackles.component';
import { ExpectedDribblesComponent } from './components/expected-dribbles/expected-dribbles.component';
import { ExpectedGCAComponent } from './components/expected-gca/expected-gca.component';


@NgModule({
    declarations: [
        ExpectedGoalsComponent,
        ExpectedAssistComponent,
        ExpectedTacklesComponent,
        ExpectedDribblesComponent,
        ExpectedGCAComponent,
    ],
    imports: [
        CommonModule,
        PredictionsRoutingModule,
        FormsModule,
        DashboardModule
    ]
})
export class PredictionsModule { }
