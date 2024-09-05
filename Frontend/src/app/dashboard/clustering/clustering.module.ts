import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClusteringRoutingModule } from './clustering-routing.module';
import { SimilarPlayersComponent } from './components/similar-players/similar-players.component';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from "../dashboard.module";


@NgModule({
    declarations: [
        SimilarPlayersComponent
    ],
    imports: [
        CommonModule,
        ClusteringRoutingModule,
        FormsModule,
        DashboardModule
    ]
})
export class ClusteringModule { }
