import { Component, OnInit } from '@angular/core';


 export interface Business {
  type:string,
  name:string,
  status:string,
  started:Date
}

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor() { }

  filtervalue:string = '';

  ngOnInit(): void {
  }


  Business:Array<Business> = [
    {type:'midcap',name:'sumit kuamr',status:'stable',started: new Date()},
    {type:'midcap',name:'kumar kushwaha',status:'offline',started: new Date()},
    {type:'midcap',name:'akash shitole',status:'online',started: new Date()},
    {type:'midcap',name:'sumit kuamr',status:'unknown',started: new Date()},
  ]



  getcolor(color:any):string{
      return color === 'stable'? 'yellow':( color === 'offline' ? 'orange': color === 'online' ? 'green': 'pink' )
  }

}
