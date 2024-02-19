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
    this.listservice.getList().subscribe({
      next: (data) => {  ////// Success handler
        this.listdata = data;
        this.listdata=this.listdata.results;
        console.log("list data:"+JSON.stringify(this.listdata));
      },
      error: (err: any) => { alert("An Unexpected error occured , Please try again")},    ////// Error handler
      complete: () => { console.log("fetching of data is complete")}  ////// Process Complete

      
   });

  }

  // ******* Get Character Detail
  getdetail(selected:any)
  {
    this.router.navigate(['/detail'],{ state:  selected});
  }
}
