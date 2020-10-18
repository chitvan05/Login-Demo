import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RequestAccessComponent } from './pages/request-access/request-access.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

const routes: Routes = [
  {path: '' , component :RequestAccessComponent},
  {path: 'thank-you' , component :ThankYouComponent},
  {path: 'sign-up' , component :SignUpComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [RequestAccessComponent,SignUpComponent,ThankYouComponent]
