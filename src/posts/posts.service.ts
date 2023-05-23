import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/typeorm/entities/Posts';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/CreatePost.dto';
import { CreatePostParams } from 'src/utils/types';

const POSTS = [
  {
    id: 1,
    title: 'Lorem Ipsum 1',
    content: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 2,
    title: 'Lorem Ipsum 2',
    content: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 3,
    title: 'Lorem Ipsum 3',
    content: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 4,
    title: 'Lorem Ipsum 4',
    content: 'Lorem ipsum dolor sit amet.',
  },
];

@Injectable()
export class PostsService {
  private posts = POSTS;

  constructor(
    @InjectRepository(Posts) private postsRepository: Repository<Posts>,
  ) {}

  public async getBlogPosts() {
    return this.posts;
  }

  public async createBlogPosts(blogPostDetails: CreatePostParams) {
    const newBlogPost = this.postsRepository.create({
      ...blogPostDetails,
      createdAt: new Date(),
    });

    return this.postsRepository.save(newBlogPost);
  }
}
