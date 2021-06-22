import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OwnersComponent } from './owners/owners.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetsComponent } from './pets/pets.component';
import { EditComponent } from './owners/edit/edit.component';
import { EditpetComponent } from './pets/editpet/editpet/editpet.component';
import { UpdateComponent } from './owners/update/update.component';
import { UpdatepetsComponent } from './pets/updatepets/updatepets.component';


@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    HomeComponent,
    EditComponent,
    PetsComponent,
    EditpetComponent,
    UpdateComponent,
    UpdatepetsComponent,
    // HeaderComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'owners', component: OwnersComponent },
      { path: 'owners/:id', component: OwnersComponent },
      { path: 'home', component: HomeComponent },
      { path: 'owners/add/:id', component: EditComponent },
      { path: 'owners/update/:id', component: UpdateComponent },
      { path: 'pets', component: PetsComponent },
      { path: 'pets/add/:id', component: EditpetComponent },
      { path: 'pets/updatepets/:pid', component: UpdatepetsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },

    ])

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
