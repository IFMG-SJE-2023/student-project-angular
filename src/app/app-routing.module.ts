import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SegundaTelaComponent } from './components/segunda-tela/segunda-tela.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'segunda-tela', component:SegundaTelaComponent},
  {path:'segunda-tela2', component:SegundaTelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
