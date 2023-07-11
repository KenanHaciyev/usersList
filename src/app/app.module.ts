import { MainComponent } from './components/main/main.component'
import { FormDataService } from './services/form-data.service'
import { jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid'
import { AppComponent } from './app.component'
import { NgModule } from '@angular/core'

@NgModule({
	declarations: [AppComponent, MainComponent],
	imports: [BrowserModule, AppRoutingModule, jqxGridModule, jqxDataTableModule],
	providers: [FormDataService],
	bootstrap: [AppComponent],
})
export class AppModule {}
