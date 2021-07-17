import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  btnLoading: Boolean = false;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit = (v: NgForm) => {
    this.btnLoading = true;
    if (v.form.status === 'VALID') {
      const data: any[] =
        JSON.parse(localStorage.getItem('userList') as string) || [];
      const {
        form: {
          value: { email, name, phone, website },
        },
      } = v;
      const user = { email, name, phone, website };
      this.httpClient
        .post(`https://jsonplaceholder.typicode.com/users`, user)
        .subscribe((data: any) => {
          this.btnLoading = false;
          this.router.navigate(['/users']);
          localStorage.setItem('userList', JSON.stringify(data));
        });
    } else {
      this._snackBar.open('Something Went Wrong', 'Close', { duration: 3000 });
    }
  };
  goBack = () => {
    this.router.navigate(['/users']);
  };
}
