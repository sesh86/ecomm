import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.services';//DI


@Component({
  selector: 'my-prod',
  templateUrl: './prod.component.html',
  providers:[AppService]

})
export class ProdComponent  { name = 'Angular';
names:any;
prod:any;
constructor(private route:ActivatedRoute,private _appService:AppService) {
  // this.names=this._appService.getNames();
}
ngOnInit() {
  this.names=this._appService.getNames();
  this._appService.getProd(this.route.snapshot.params['name']).subscribe(res=>{this.prod=res;console.log(this.prod);});
}

 }
