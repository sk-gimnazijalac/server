import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './typeorm/entities/Posts';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'sk_gimazijalac_db',
      entities: [Posts],
      synchronize: true,
    }),
    PostsModule,
  ],
})
export class AppModule {}
