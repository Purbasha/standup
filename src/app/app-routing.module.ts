import { PlayerComponent } from './player/player.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'player', component:  PlayerComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
