import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
  <a class="matero-branding" href="/">
  <img src="./assets/images/LogoAngular.jpg" class="matero-branding-logo-expanded" alt="logo">
  <span class="matero-branding-name"><strong> DEVELOPER </strong></span>
  </a>

  `,
})
export class BrandingComponent {}
