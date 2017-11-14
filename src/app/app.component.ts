import { Component } from '@angular/core';
import { TipService } from './services/tip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TipService ]
})
export class AppComponent {
  title = 'app';
}
