import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';
import { TodoService } from './todo.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './resolvers/user.resolver';
import { TodoResolver } from './resolvers/todo.resolvers';
import { join } from 'path/posix';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService, TodoService, UserResolver, TodoResolver],
})
export class AppModule {}
