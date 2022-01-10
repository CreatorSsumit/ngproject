import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { PostService } from '../post.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {


  @ViewChild('form') formData!: NgForm;

  constructor(private formdataservice:PostService,private http:HttpClient){}
  Posts:any;
  isbtnnone:boolean = true;
  
  ngOnInit(): void {

  this.formdataservice.fetchdata().subscribe(  res=> {
    this.Posts = res;
    this.isbtnnone = true;
  },error=>  {
    
    this.Posts = [{body:error.message,title:error.name,color:'danger'}]
  this.isbtnnone = false
  
  }
    
    )

}

onsubmit(){
 this.formdataservice.onsubmit(this.formData);
}




ondeletepost(id:any){
  
  this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id)
 
}


}
