
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TopMenuComponent } from './top-menu.component';

@NgModule({
    imports:
    [
        BrowserModule
    ],
    declarations:
    [
        TopMenuComponent
    ],
    exports:
    [
        TopMenuComponent
    ]
})

export class TopMenuModule {
}
