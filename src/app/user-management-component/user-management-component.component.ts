import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management-component',
  templateUrl: './user-management-component.component.html',
  styleUrls: ['./user-management-component.component.scss']
})
export class UserManagementComponentComponent {
  currentUser = { name: 'Ansh', email: '@AnshValorx.com' };
  updatedUser!: { name: string; email: string };

  handleUserUpdate(userData: { name: string; email: string }) {
    this.updatedUser = userData; // Handle updated user data from child
    console.log('Received updated user data:', userData);
  }
}
