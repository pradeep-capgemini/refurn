<<<<<<< HEAD
import { Component, EventEmitter, Output } from '@angular/core';
=======
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogoutConfirmationDialogComponent } from './logout-confirmation-dialog/logout-confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
>>>>>>> 07ed42f3d7ba3398297011d8c76ba41cb2a398f5

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userName: string | null = null;
  userType: string | null = null;
  role: string | null = null;
  constructor(public authService: AuthService, private router: Router,
    private snackBar: MatSnackBar, private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    this.userType = this.authService.getUserType();
    this.role = this.authService.getRole();

debugger
    if (this.role === 'ADMIN' && this.userType === 'buyer') {
      this.router.navigate(['/admin']);
    }
    if (this.userType === 'seller') {
      this.router.navigate(['/add-product']);
    }


  }

  title = 'refurn';
  searchQuery: string = '';

  onSearch(term: string) {
    this.searchQuery = term;
  }
<<<<<<< HEAD
=======



  confirmLogout(): void {
    const dialogRef = this.dialog.open(LogoutConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        localStorage.removeItem('userType');
        localStorage.removeItem('role');
        this.router.navigate(['/home']);
        this.snackBar.open('👋 You have been logged out.', 'OK', {
          duration: 3000
        });
      }
    });
  }


>>>>>>> 07ed42f3d7ba3398297011d8c76ba41cb2a398f5
}


