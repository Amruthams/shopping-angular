import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {

  // store data as global
  id: any = ""  //3
  singleProduct:any = {}  //5

  constructor(private service: DataService, private rout: ActivatedRoute) { }  //1
  ngOnInit(): void {
    this.rout.params.subscribe((data: any) => {  //2
      this.id = data.id;
      // console.log(this.id);
      this.service.getProducts().subscribe((response: any) => {  //4

        this.singleProduct = response.find((i: any) => i.id == this.id); //6
        console.log(this.singleProduct);

      })


    })


  }

}
