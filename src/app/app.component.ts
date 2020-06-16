import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {

    this.matIconRegistry.addSvgIcon(
      `cog`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/cog.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `drawer`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/drawer.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `like`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/like.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `dislike`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dislike.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `menu-more`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/menu-more.svg")
    );

  }

  title = 'XAI-NLP';

}
