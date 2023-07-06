import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <body>

      <section id=tweets><div class=content><p>tweets</p></div></section>
      <section id=favorites><div class=content><p>favorites</p></div></section>
      <section id=conversations><div class=content><p>conversations</p></div></section>
      <section id=retweets><div class=content><p>retweets</p></div></section>

    </body>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
