import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  detailData:any;
  name:any;
  image:any;
  gender:any;
  
  constructor(private router: Router) {
    this.detailData = this.router.getCurrentNavigation()?.extras.state;
}
ngOnInit() {
  this.name=this.detailData.name
  this.image=this.detailData.image;
  this.gender=this.detailData.gender;
}
goBack()
{
  window.history.back();
}
}
