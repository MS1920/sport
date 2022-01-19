import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlogComponent } from './components/blog/blog.component';
import { DisplayArticleComponent } from './components/display-article/display-article.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerStatusComponent } from './components/player-status/player-status.component';
import { PlayersComponent } from './components/players/players.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamsComponent } from './components/teams/teams.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  {path:"" , component : HomeComponent},
  {path:"login" , component : LoginComponent},
  {path:"profile/:id" , component : ProfileComponent},
  {path:"signup" , component : SignupComponent},
  {path:"signupAdmin" , component : SignupComponent},
  {path:"display-user/:display/:id" , component : SignupComponent},
  {path:"edit-user/:edit/:id" , component : SignupComponent},
  {path:"admin" , component : AdminComponent},
  {path:"add-article" , component : AddArticleComponent},
  {path:"edit-article/:id" , component : AddArticleComponent},
  {path:"display-article/:id" , component : DisplayArticleComponent},
  {path:"add-match" , component : AddMatchComponent},
  {path:"edit-match/:id" , component : EditMatchComponent},
  {path:"display-match/:id" , component : DisplayMatchComponent},
  {path:"add-player" , component : AddPlayerComponent},
  {path:"edit-player/:id" , component : AddPlayerComponent},
  {path:"display-player/:id" , component : DisplayPlayerComponent},
  {path:"add-team" , component : AddTeamComponent},
  {path:"edit-team/:id" , component : AddTeamComponent},
  {path:"display-team/:id" , component : DisplayTeamComponent},
  {path:"search-matches" , component : SearchMatchesComponent},
  {path:"matches" , component : MatchesComponent},
  {path:"players" , component : PlayersComponent},
  {path:"teams" , component : TeamsComponent},
  {path:"player-status" , component : PlayerStatusComponent},
  {path:"blog" , component : BlogComponent},
  {path:"weather" , component : WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
