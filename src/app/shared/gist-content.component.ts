import { AfterViewInit, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gist',
  templateUrl: './gist-content.component.html',
  styleUrls: ['./gist-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GistContentComponent implements AfterViewInit {
  @ViewChild('iframe') iframe!: ElementRef;
  @Input() gistId!: string;

  constructor() {
  }

  ngAfterViewInit() {
    this.iframe.nativeElement.id = 'gist-' + this.gistId;
    const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
    const content = `
      <html>
        <head>
          <base target="_parent">
        </head>
        <body onload="parent.document.getElementById('${this.iframe.nativeElement.id}')">
          <script type="text/javascript" src="https://gist.github.com/${this.gistId}.js"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }
}
