import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../userInterface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';
import { ServiceService } from '../service.service';
import { find } from 'rxjs';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  newGroup!: FormGroup;
  hasError = false;
  isValid = false;
  
  

    constructor(private fb: FormBuilder,private newarr:ServiceService) {
     
    }
    ngOnInit() {
      this.newGroup = this.fb.group({
        name: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Corrected phone validation
        email: ['', [Validators.required, Validators.email]],
      });
    }
    
    addUser() {
      if(this.newGroup.invalid){
        alert("not valid")
  } else
      this.newarr.users.push(this.newGroup.value);
      this.isValid=true

    }

    

}
