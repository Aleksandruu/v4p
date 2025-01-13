import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form!: FormGroup 

  constructor(private router:Router){
    this.form = new FormGroup( {
      username: new FormControl(),
      password: new FormControl()
    }
  )
  }

  ngOnInit(){
   }

  goToAppointment(){
    this.router.navigate(["appointment"])
  }
}
