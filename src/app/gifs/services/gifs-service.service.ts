import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList = [];

  private _tagsHistory:string[] = [];
  private apiKey:string = 'dw9B0vmpvd91JCNR9V4Gf0ip71gToThD';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs'


  constructor(private httpClient:HttpClient) {
    // this.loadLocalStorage();
    // console.log(this._tagsHistory)

  }

  get tagsHistory(){
    return [...this._tagsHistory];
  }



  organizeHistory(tag:string){
    tag = tag.toLocaleLowerCase(); // esto es para volver a minusculas

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag)=>oldTag!==tag) // es para filtrar solo los tags que son diferentes al tag
    }

    this._tagsHistory.unshift(tag); // es para agregar el tag al incio del arrelgo

    this._tagsHistory = this._tagsHistory.splice(0,10) // es para que solo alla 10 propiedades en el arreglo
    this.saveLocalStorage()
  }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify (this._tagsHistory))
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse( localStorage.getItem('history')!);

    if(this._tagsHistory.length<0) return;
    this.searchTag(this.tagsHistory[0]);
  }


  public searchTag(tag:string):void{
    // console.log(tag)

    if(tag.length===0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('q',tag)



    this.httpClient.get<any>(`${this.apiKey}/search`, {params})
    this.httpClient.get<any>(`${this.serviceUrl}/search`, {params})
    .subscribe(resp=>{

      this.gifList = resp.data
    })





  }

}
