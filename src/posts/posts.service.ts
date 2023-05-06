import { Injectable } from '@nestjs/common';
import { POSTS } from 'src/blog-post/mock';

@Injectable()
export class PostsService {
  private posts = POSTS;

  public async getBlogPosts() {
    return this.posts;
  }
}
