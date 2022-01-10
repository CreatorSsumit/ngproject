import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent {


  @ViewChild('form') formData!: NgForm;
  defaultstate = 'mp'




onsubmit():void{
  console.log(this.formData);

}

onsetvalue(){
this.formData.form.setValue({
  email: "pksumitkumar98@gmail.com",
  fulladdress: {address: 'gajju pipaliya road', state: 'mp', zip: '462046'},
  gender: "",
  password: "sd",
  username: "e"
})
}

onpatchvalue(){
this.formData.form.patchValue({
  username:'sumitkkk'
})
}

}
