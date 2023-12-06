import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private _tagsHistory:string[] = [];
  private apiKey:string = 'dw9B0vmpvd91JCNR9V4Gf0ip71gToThD';


  constructor(private httpClient:HttpClient) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }



  organizeHistory(tag:string){
    tag = tag.toLocaleLowerCase(); // esto es para volver a minusculas

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag)=>oldTag!==tag) // es para filtrar solo los tags que son diferentes al tag
    }

    this._tagsHistory.unshift(tag); // es para agregar el tag al incio del arrelgo

    this._tagsHistory = this._tagsHistory.splice(0,10) // es para solo alla 10 propiedades en el arreglo

  }


  public searchTag(tag:string):void{

    if(tag.length===0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('1',tag)



    this.httpClient.get(`${this.apiKey}/search`, {params})
    .subscribe(resp=>{
      console.log(resp)

    })





  }
}

