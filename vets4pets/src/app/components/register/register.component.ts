import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 form!: FormGroup 

  constructor(private router:Router){
    this.form = new FormGroup( {
      username: new FormControl(),
      password: new FormControl(),
      conpassword: new FormControl(),
    }
  )
  }

  ngOnInit(){
   }

  goToAppointment(){
    this.router.navigate(["appointment"])
  }
}
