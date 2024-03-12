import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent  {
  

  constructor(private email:EmailService)
  {}

  data:any=
{
  to:"",
  subject:"",
  text:""
}

  dosubmitForm() {

    console.log(this.data)
    this.email.sendEmail(this.data).subscribe(

      response=>
      {
        console.log(response);
      },
      error=>
      {
        console.log(error);
      }
    )
  }

}
