import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { confirmPasswordValidator } from '../../validators/confirm-password.validators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent {

  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  registerForm !: FormGroup;
  
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.compose([Validators.required, Validators.email])],
      userName : ['', Validators.required],
      password : ['', Validators.required],
      confirmpassword : ['',Validators.required]
     },
     {
      validator : confirmPasswordValidator('password', 'confirmpassword')
     }
     );
  }

  register() {
    this.authService.registerService(this.registerForm.value).subscribe({
      next:(res) =>{
        alert(res.message)
        //console.log(res);
        this.registerForm.reset();
        this.router.navigate(['/login'])
      },
      error:(err) =>{
        console.log(err)
      }   
    })
}

}
