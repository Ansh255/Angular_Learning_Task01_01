import { Component, EventEmitter, HostBinding, HostListener, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  @Input() user!: { name: string; email: string }; // Input property to receive user data
  @Output() userUpdated = new EventEmitter<{ name: string; email: string }>(); // Output property to emit user updates

  private originalUser!: { name: string; email: string };

  // Host binding to change style dynamically
  @HostBinding('style.border') border = '1px solid black';

  ngOnInit() {
    // console.log('THis is without seperated date ',this.user)
    // console.log('THis is without seperated date ',{...this.user})
    this.originalUser = { ...this.user }; // Store original user data

    // console.log('Original Data ',this.originalUser)
    
    console.log('UserDetailComponent initialized with user:', this.user);

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      console.log('User changed:', changes['user'].currentValue);
    }
  }

  ngOnDestroy() {
    console.log('UserDetailComponent destroyed');
  }

  sendUpdate() {
    this.userUpdated.emit(this.originalUser); // Emit the original user data back to parent
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.border = '2px solid blue'; // Change border color on mouse enter
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.border = '1px solid black'; // Reset border color on mouse leave
  }
}