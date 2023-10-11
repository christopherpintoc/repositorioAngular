import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorIntl, MatPaginatorModule} from   '@angular/material/paginator';
import { PaginatorIntl } from './services/paginatorIntl.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FiltroPipe } from './home/pipes/filtro.pipe';
import { FiltroFavoritosPipe } from './home/pipes/filtro-favoritos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritosComponent,
    SidenavComponent,
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
    MatButtonModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
