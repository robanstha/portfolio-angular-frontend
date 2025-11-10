import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '**', 
    redirectTo: '' 
  }
  { path: 'timeline', component: TimelineComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}