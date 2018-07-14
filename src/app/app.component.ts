import { Component } from '@angular/core';

declare let google: any;

declare global {
  interface Window { google: any; }
}
window.google = window.google || {};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    this.addScript();
  }


  addScript () {
    let script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.onload = () => this.translate()
    document.body.appendChild(script);
  }

  translate() {
    const lang = 'fr';
    setTimeout(() => {
      if (!google && window.google) {
        google = window.google;
      }
      const newTrSr = new google.translate.TranslateElement({
        pageLanguage: lang,
        // includedLanguages: 'en,fr,de',
        layout: 2
      },
        'google_translate_element');
    }, 500);

  }
}
}



