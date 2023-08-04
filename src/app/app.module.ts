import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { CommonEffectComponent } from './components/common-effect/common-effect.component';
import { TypingEffectDirective } from './components/directive/typing-effect.directive';

@NgModule({
  declarations: [
    TypingEffectDirective,


    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    CommonEffectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
