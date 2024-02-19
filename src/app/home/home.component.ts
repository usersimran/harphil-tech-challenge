import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  listdata: any=[];
  constructor(private listservice: ListService,
              private router: Router) { }

  ngOnInit() {
    this.listservice.getList() .subscribe(
      (data: any) => {  //Success callback
        this.listdata = data.results;
        console.log("list data:"+JSON.stringify(this.listdata));
      },
      (error: any) => {   //Error callback
        console.error('error caught in component')
        alert("Error while loading server data. Try Again");
         }
    )
    
    // this.listservice.getList().subscribe((data: any) => {
    //   this.listdata = data.results;
    //   console.log("list data:"+JSON.stringify(this.listdata));
    // }
    // );
  }


}
