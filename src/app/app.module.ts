import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { GraphQLModule } from '@headless-world/graphql';
import { NavigationModule } from '@headless-world/navigation';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';

import contentInitializerFactory from './content/content.initializer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    NavigationModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    deps: [Apollo, ActivatedRoute],
    useFactory: contentInitializerFactory,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
