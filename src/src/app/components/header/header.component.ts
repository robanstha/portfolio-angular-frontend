import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ScrollProgressService } from '../../shared/scroll-progress.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  progress$: Observable<number>;

  constructor(private scroll: ScrollProgressService) {
    // If the service does not declare progress$ in its type, cast to any to avoid a type error,
    // and fall back to an empty Observable to keep the component safe.
    this.progress$ = (this.scroll as any).progress$ ?? new Observable<number>();
  }
}