import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HomePageComponent } from './header/home-page/home-page.component';
import { AboutPageComponent } from './header/about-page/about-page.component';
import { PortfolioPageComponent } from './header/portfolio-page/portfolio-page.component';
import { ContactDialogComponent } from './header/contact-dialog/contact-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactPageComponent } from './header/contact-page/contact-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { SocialMediaIconsComponent } from './header/social-media-icons/social-media-icons.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContentPageComponent } from './content/content-page/content-page.component';
import { FooterPageComponent } from './footer/footer-page/footer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    PortfolioPageComponent,
    ContactDialogComponent,
    ContactPageComponent,
    NavBarComponent,
    SocialMediaIconsComponent,
    ContentPageComponent,
    FooterPageComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
