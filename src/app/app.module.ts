import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminMatchesComponent } from './components/admin-matches/admin-matches.component';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { BannerComponent } from './components/banner/banner.component';
import { TeamsVsComponent } from './components/teams-vs/teams-vs.component';
import { NewsComponent } from './components/news/news.component';
import { MatchTeamComponent } from './components/match-team/match-team.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { AdminTeamsComponent } from './components/admin-teams/admin-teams.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import { TtcPipe } from './pipes/ttc.pipe';
import { PlayerStatusComponent } from './components/player-status/player-status.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { AdminBlogsComponent } from './components/admin-blogs/admin-blogs.component';
import { DisplayArticleComponent } from './components/display-article/display-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AdminMatchesComponent,
    AdminPlayersComponent,
    AddMatchComponent,
    AddPlayerComponent,
    BannerComponent,
    TeamsVsComponent,
    NewsComponent,
    MatchTeamComponent,
    VideosComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    MatchesComponent,
    TeamsComponent,
    TeamComponent,
    PlayersComponent,
    PlayerComponent,
    AddTeamComponent,
    EditMatchComponent,
    AdminTeamsComponent,
    ReversePipe,
    ReplacePipe,
    TtcPipe,
    PlayerStatusComponent,
    DisplayMatchComponent,
    DisplayTeamComponent,
    DisplayPlayerComponent,
    AdminBlogsComponent,
    DisplayArticleComponent,
    AddArticleComponent,
    SearchMatchesComponent,
    AdminUsersComponent,
    ProfileComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
