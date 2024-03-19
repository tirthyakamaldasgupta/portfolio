import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() brandName: string = 'Tirthya Kamal Dasgupta';
  @Input() links: { label: string; path: string }[] = [
    {
      label: 'Experience',
      path: '/experience',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
    {
      label: 'Education',
      path: '/education',
    },
    {
      label: 'Blogs',
      path: '/blogs',
    },
    {
      label: 'Connect',
      path: '/connect',
    },
  ];
}
