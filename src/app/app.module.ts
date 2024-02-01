import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
//import { RouterModule, ActivatedRoute } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { FiltroPipe } from './home/pipes/filtro.pipe';
import { FiltroFavoritosPipe } from './home/pipes/filtro-favoritos.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorIntl, MatPaginatorModule} from   '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { PaginatorIntl } from './services/paginatorIntl.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritosComponent,
    FiltroPipe,
    FiltroFavoritosPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule,
    MatPaginatorModule,
    NgxPaginationModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
