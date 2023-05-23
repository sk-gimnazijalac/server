import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/CreatePost.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async getBlogPosts() {
    return await this.postsService.getBlogPosts();
  }

  @Post()
  async createBlogPosts(@Body() createPostDto: any) {
    this.postsService.createBlogPosts(createPostDto);
  }
}
