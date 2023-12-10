import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent
  ]
})
export class GifsModule { }
