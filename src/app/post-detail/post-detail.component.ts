import { Component, inject, input } from '@angular/core';
import { Post } from '../post';
import { DataService } from '../data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent {
  id = input.required<number>();
  dataService = inject(DataService);

  post!: Post;

  ngOnInit() {
    this.post = this.dataService.getPostById(this.id());
  }
}
