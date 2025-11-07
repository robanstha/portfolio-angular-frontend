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
    this.progress$ = this.scroll.progress$;
  }
}