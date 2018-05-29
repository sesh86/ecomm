import {Http} from '@angular/http';
import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService{
  constructor(private http:Http){}
  getNames(){
    return [{id:1,name:"John"},{id:2,name:"Jack"},{id:3,name:"Jim"}]
  }
  getProd(prod_id:String){
    return this.http.get('http://localhost:8080/product/'+prod_id).map((res)=>res.json());
  }
  getCategory(category:String){
    return this.http.get('http://localhost:8080/category/'+category).map((res)=>res.json());
  }
}
