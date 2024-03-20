import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerText: string = 'Copyright © 2023 Tirthya Kamal Dasgupta. All rights reserved.';
}
