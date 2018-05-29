import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.services';//DI

@Component({
  selector: 'my-category',
  templateUrl: './category.component.html',
  providers:[AppService]
})
export class CategoryComponent  { name = 'Angular';
prod:any;
constructor(private route:ActivatedRoute,private _appService:AppService) {
  this.route.params.subscribe(params => {
                                  this.param = params['name'];
                                  this.ngOnInit(); // reset and set based on new parameter this time
                              });
}
ngOnInit() {
  this._appService.getCategory(this.route.snapshot.params['name']).subscribe(res=>{this.prod=res;console.log(this.prod);});
}
ngAfterViewChecked(){
  // this._appService.getCategory(this.route.snapshot.params['name']).subscribe(res=>{this.prod=res;console.log(this.prod);});
}
ngOnDestroy() {
  this.prod=null;
}
