import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ChildComponent } from './Component/child/child.component';
import { HomeComponent } from './Component/home/home.component';
import { ParentComponent } from './Component/parent/parent.component';
import { RegisterComponent } from './Component/register/register.component';

export const routes: Routes = [
      { path: '', component: HomeComponent , pathMatch:'full'},
      { path: 'parent', component: ParentComponent },
      { path: 'child', component: ChildComponent },
      { path: 'first-component', component: HomeComponent , pathMatch:'full'},
      { path: 'second-component', component: RegisterComponent },
]; 
