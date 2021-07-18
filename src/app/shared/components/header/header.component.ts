import { Component, Input, OnInit } from '@angular/core';
import { Theme, ThemeService } from 'src/app/core/services/theme.service';
import { NavItem } from '../../interfaces';
import { ColorScheme, COLOR_SCHEMES } from '../../type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('page') page: 'home' | 'others' = 'home';
  @Input('color') colorScheme: ColorScheme = 'primary';

  activeTheme: Theme;

  landingPageRoute = '/landing-page';
  title = 'RandomTools';
  loginTxt = 'Login';

  navItems: NavItem[] = [
    { label: 'Document', id: 'document' },
    { label: 'Image', id: 'image' },
    { label: 'Audio', id: 'audio' },
    { label: 'Science', id: 'science' },
    { label: 'Other Tools', id: 'other-tools' },
    { label: 'Developers', id: 'developers' },
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.activeTheme = this.themeService.getActiveTheme();
  }

  onNavItemClick(item: NavItem) {}

  get notLandingPage() {
    return this.page === 'others';
  }

  get isLandingPage() {
    return this.page === 'home';
  }

  getSVGFillColor() {
    if (!this.colorScheme || !COLOR_SCHEMES.includes(this.colorScheme)) {
      this.colorScheme = 'primary';
    }
    if (this.page !== 'home') return { fill: `url(#g-${this.colorScheme})` };
    return {};
  }

  changeTheme() {
    this.activeTheme = this.activeTheme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(this.activeTheme);
  }

  onLogin() {}
}
