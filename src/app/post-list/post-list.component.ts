import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  dataService = inject(DataService);
  posts: Post[] = [];

  ngOnInit() {
    this.posts = this.dataService.posts;
  }
}
