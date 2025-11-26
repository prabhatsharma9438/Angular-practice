import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsersData } from './users-data';

@Component({
  selector: 'app-users',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {
users : any[] = []

constructor(private userService: UsersData){}

ngOnInit(): void {
    this.userService.getUsers().subscribe( (data:any) => {
      // this.users = data.users;
      this.users = data;
    });
}
}
