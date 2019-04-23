import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-panel',
  templateUrl: './language-panel.component.html',
  styleUrls: ['./language-panel.component.css']
})
export class LanguagePanelComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  changeLang(lang: string) {
    console.log(lang);
    this.translate.use(lang);
  }
}
