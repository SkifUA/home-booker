import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../../shared/services/users.service';
import { User} from '../../shared/models/user.model';


@Component({
  selector: 'hb-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email ]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {

    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);

    this.userService.createNewUser(user)
      .subscribe((user: User) => {
        console.log(user);
      });
  }

}
