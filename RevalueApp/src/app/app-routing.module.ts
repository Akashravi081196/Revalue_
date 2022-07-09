import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';




const newLocal = 'Contact';
const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		
	},

	{
		path:'landing',
		component: LandingComponent,
		pathMatch:"full"
	
	},

	{
		path: 'login',
		component: LoginComponent,
		pathMatch: "full"
	},
	{
		path: 'user',
		component: UserComponent,
		pathMatch: "full",
		canActivate: [ AuthGuard ]
	},

	{
		path : 'register',
		component: RegisterComponent,
		pathMatch: "full"

	},

	{

		path: 'About-us',
		component: AboutUsComponent,
		pathMatch: "full"
	},

	{
		path: 'contact',
		component: ContactComponent,
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
