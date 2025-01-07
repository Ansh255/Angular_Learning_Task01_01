import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management-component',
  templateUrl: './user-management-component.component.html',
  styleUrls: ['./user-management-component.component.scss']
})
export class UserManagementComponentComponent {
  currentUser = { name: 'Ansh', email: '@AnshValorx.com' };
  updatedUser!: { name: string; email: string };

  updateUser(){
    this.currentUser =  { name: 'Ansh', email: '@AnshValorx.com' };
    console.log("User Updated" , this.currentUser)
  }
}
