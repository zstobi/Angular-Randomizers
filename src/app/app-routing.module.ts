import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { WordsComponent } from './components/words/words.component';

const routes: Routes = [
  {path:'',component:IntroComponent},
  {path:'words',component:WordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
