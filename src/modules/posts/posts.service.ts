/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import { readFile } from 'fs/promises';
import { CreatePostDto } from './DTO/createPost.dto';
import { writeFile } from 'fs/promises';
import { UpdatePostDto } from './DTO/updatePost.dto';

@Injectable()
export class PostsService {
  private paths: string;
  constructor() {
    this.paths = path.join(__dirname, '../../..', 'src/fakeData/posts.json');
  }

  async getAllPostsService() {
    try {
      const posts: any = await readFile(this.paths, 'utf-8');
      const result = JSON.parse(posts);
      return result;
    } catch (error) {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }
  }

  async getByIdPostService(id: number) {
    try {
      const posts: any = await readFile(this.paths, 'utf-8');
      const result = JSON.parse(posts);
      const finalData = result.find((post: any) => post.id === id);
      return finalData;
    } catch (error) {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }
  }

  async createPostService(post: CreatePostDto) {
    try {
      const posts: any = await readFile(this.paths, 'utf-8');
      const result = JSON.parse(posts);
      result.unshift(post);
      await writeFile(this.paths, JSON.stringify(result));
      return {
        message: 'Post created successfully',
      };
    } catch (error) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  async updatePostService(id: number, post: UpdatePostDto) {
    try {
      const posts: any = await readFile(this.paths, 'utf-8');
      const result = JSON.parse(posts);

      const index = result.findIndex((p: any) => p.id === id);
      result[index] = post;

      await writeFile(this.paths, JSON.stringify(result));

      return {
        message: 'update successfully',
      };
    } catch (error) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  async removePostService(id: number) {
    try {
      const posts: any = await readFile(this.paths, 'utf-8');
      const result = JSON.parse(posts);
      result.splice(id, 1);
      await writeFile(this.paths, JSON.stringify(result));
      return {
        message: 'Delete successfully',
      };
    } catch (error) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }
}
