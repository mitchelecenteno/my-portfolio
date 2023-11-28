import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { NavBarComponent } from './1 - header/nav-bar/nav-bar.component';
import { FooterPageComponent } from './3 - footer/footer-page/footer-page.component';
import { SectionPagesComponent } from './2 - content/section-pages/section-pages.component';
import { HomePageComponent } from './2 - content/section-pages/home-page/home-page.component';
import { AboutPageComponent } from './2 - content/section-pages/about-page/about-page.component';
import { ContactDialogComponent } from './shared/dialog/contact-dialog/contact-dialog.component';
import { ContactPageComponent } from './2 - content/section-pages/contact-page/contact-page.component';
import { ProjectsPageComponent } from './2 - content/section-pages/projects-page/projects-page.component';
import { FloatingSocmedIconsComponent } from './shared/floating-socmed-icons/floating-socmed-icons.component';
import { BiodataPageComponent } from './2 - content/biodata-page/biodata-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactDialogComponent,
    ContactPageComponent,
    NavBarComponent,
    FooterPageComponent,
    SectionPagesComponent,
    ProjectsPageComponent,
    FloatingSocmedIconsComponent,
    BiodataPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
