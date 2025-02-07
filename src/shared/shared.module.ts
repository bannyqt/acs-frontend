import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from './input-label/input-label.component';


@NgModule({
    declarations : [
        InputComponent
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [ 
        InputComponent
    ]
})
export class SharedModule {

}