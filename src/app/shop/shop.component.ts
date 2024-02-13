import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  placeholderData:string="Search For Your Prodcut!!"
  productName:any=""
  productList:any=[]
  


  constructor( private ds:DataService){}
  ngOnInit(): void {
    this.ds.getProducts().subscribe((data:any)=>{
      
      this.productList=data
      console.log(data);
      
      

    })
    
  }

}
