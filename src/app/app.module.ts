import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginModule } from './user-login/user-login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartComponent } from './chart/chart.component';
import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';
// import { FormsModule} from '@angular/Forms';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PdfReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserLoginModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
