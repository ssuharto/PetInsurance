import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InsuranceCardsComponent } from './insurance-cards/insurance-cards.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { InsurancePackagesService } from './insurance-packages.service';
import { AppRoutingModule } from './app-routing.model';
import { FormsModule, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { BirdCardsComponent } from './insurance-cards/bird-cards/bird-cards.component';
import { RodentCardsComponent } from './insurance-cards/rodent-cards/rodent-cards.component';
import { ReptileCardsComponent } from './insurance-cards/reptile-cards/reptile-cards.component';



@NgModule({
  declarations: [
    AppComponent,
    InsuranceCardsComponent,
    WelcomeComponent,
    BirdCardsComponent,
    RodentCardsComponent,
    ReptileCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // order matters, put all specific before the wild cards
      {path: 'insurance-card', component: InsuranceCardsComponent},
/*       {path: 'profile/:heroname', component: ProfileComponent}, */
      {path: 'Birds', component: BirdCardsComponent},
      {path: 'Rodents', component: RodentCardsComponent},
      {path: 'Reptiles', component: ReptileCardsComponent},
       {path: '', redirectTo: 'insurance-card', pathMatch: 'full'},
      {path: '**', redirectTo: 'insurance-card', pathMatch: 'full'}
     ])
  ],
  providers: [InsurancePackagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
