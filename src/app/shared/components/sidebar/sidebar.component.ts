import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  gifs:any;

  constructor( private gifsService:GifsService) {
  }

  get tags(){
    return this.gifsService.tagsHistory;
  }


  onClick(tag:any){
    this.gifsService.searchTag(tag)
    console.log(tag)
  }




}
