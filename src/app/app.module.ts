import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DatePipe,CurrencyPipe} from  '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { transaction } from './transactions';
import { MatFormFieldModule  } from '@angular/material/form-field';
import  { MatPaginatorModule } from '@angular/material/paginator';
import  {  MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule ,
    MatFormFieldModule,MatPaginatorModule,
    MatInputModule,
    BrowserAnimationsModule,
    
  ],
  providers: [DatePipe,CurrencyPipe
],
  bootstrap: [AppComponent]
})
export class AppModule { }
