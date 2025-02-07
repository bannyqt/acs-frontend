import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'acs-input',
    templateUrl: './input-label.component.html',
    styleUrls : [ './input-label.component.scss' ],
    standalone: false
})
export class InputComponent implements OnInit {
    @Input() icon?: string;
    @Input() placeholder?: string;
    safeUrl?: SafeUrl;

    constructor(private sanitizer: DomSanitizer) {

    }

    ngOnInit(): void {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`fontawesome/${this.icon}.svg`);
    }
}