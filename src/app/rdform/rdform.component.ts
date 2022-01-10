import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rdform',
  templateUrl: './rdform.component.html',
  styleUrls: ['./rdform.component.css']
})



export class RdformComponent implements OnInit {

 formData!: FormGroup
 restricted_username = ['xxxx','angelpriya']
  constructor() { }

  usernamevalidator(control:FormControl){
    if(this.restricted_username.indexOf(control.value)!== -1)
      return {'restrictedusername':true};
      return {};
  }


  emailvalidator(control:AbstractControl): Promise<any> | Observable <any>{

  const promise = new Promise((resolve,reject)=>{
   setTimeout(() => {
     if(control.value === 'test@test.com')
     {
      resolve({'invalidemail':true});
      
     }
     else  
    {resolve({});
    } 
   }, 2000);
 });

 return promise;

  }
  ngOnInit(): void {
    this.formData = new FormGroup({
      'username':new FormControl(null,[Validators.required,this.usernamevalidator.bind(this)]),
      'email':new FormControl(null,[Validators.required,Validators.email],this.emailvalidator),
      'password':new FormControl(null,Validators.required),
      'gender':new FormControl('female'),
      'hobbies':new FormArray([])
    })
  }

  onSubmit ():void{
        console.log(this.formData.value);
  }

  onaddhobbies(){
    
    (<FormArray> this.formData.get('hobbies')).push(new FormControl(null,Validators.required))


  }

 
  onsetvalue(){
    this.formData.setValue({
      'email': "pksumitkumar98@gmail.com",
      'gender': "",
      'password': "sd",
      'username': "e",
     
    })
    }
    
    onpatchvalue(){
    this.formData.patchValue({
      'username':'sumitkkk'
    })
    }

}
