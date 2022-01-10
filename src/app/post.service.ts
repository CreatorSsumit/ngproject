import { Injectable } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService  {



  constructor(private http: HttpClient){}
  Posts: any;
  getcolorcode = ['primary','secondary','dark','info','success','danger','warning','light']



fetchdata(){
  

 return this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/posts').pipe( map(posts=>{

    posts = posts.map(post => ({...post,color:this.getcolorcode[Math.floor(Math.random() * this.getcolorcode.length)]}))
     return posts.splice(0,10);
 
     })
       
   //   map(posts=>{
       
   //   //  posts = posts.map(post => ({...post,color:this.getcolorcode[Math.floor(Math.random() * this.getcolorcode.length)]}))
   //   // return posts;
   
   // })
   
   )

  
 }
 


onsubmit(formdata:any){
  console.log(formdata.value)

  const newpost = {...formdata.value};

  this.http.post('https://jsonplaceholder.typicode.com/posts',newpost).subscribe(res=>{
    console.log(res)
  })
}





}


