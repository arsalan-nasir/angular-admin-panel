import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

export interface PeriodicElement {
  name: string;
  email: string;
  phone: number;
  website: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = [];
  loading: Boolean = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    this.loading = true;
    await this.userService
      .getAllUsers()
      .subscribe((data: PeriodicElement[]) => {
        this.loading = false;
        this.dataSource = [...data];
      });
  };

  setSelectedUser = (item: PeriodicElement) => {
    this.userService.selectedUser(item);
  };
  addNewUser() {
    this.router.navigate(['/add-users']);
  }
}
