import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  vehicles;
  
  constructor(private service: DataService, 
    public router : Router){}
  

  ngOnInit() 
  {
    
    let result=this.service.GetData();
    result.subscribe((data)=>{
      this.vehicles = data;
    });
     
  }
}