import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './DTO/createPost.dto';
import { UpdatePostDto } from './DTO/updatePost.dto';

@Controller('/api/v1/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts() {
    return this.postsService.getAllPostsService();
  }

  @Get('/:id')
  getByIdPost(@Param('id') id: string) {
    return this.postsService.getByIdPostService(Number(id));
  }

  @Post()
  createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPostService(post);
  }

  @Patch('/:id')
  updatePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.updatePostService(Number(id), post);
  }

  @Delete('/:id')
  removePost(@Param('id') id: string) {
    return this.postsService.removePostService(Number(id));
  }
}
