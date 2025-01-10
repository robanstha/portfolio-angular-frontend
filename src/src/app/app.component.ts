import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component'; // Import HeaderComponent
import { FooterComponent } from './components/footer/footer.component'; // Import FooterComponent
import { RouterModule } from '@angular/router'; // Import RouterModule for routing

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    HeaderComponent,  // Add imported components here
    FooterComponent,  // FooterComponent
    RouterModule,     // RouterModule for <router-outlet>
  ],
})
export class AppComponent {}
