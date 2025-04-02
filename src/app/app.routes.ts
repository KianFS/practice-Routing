import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { Component } from '@angular/core';

export const routes: Routes = [
  { path: '', component: PostListComponent, title: 'Home' },
  { path: 'post/:id', component: PostDetailComponent, title: 'Post-Details' },
];
