import { 
  Controller, 
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete
} from '@nestjs/common';
import { UserService } from './user.service';
import { TodoService } from './todo.service';
import { User as UserModel, Todo as TodoModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly todoService: TodoService
  ) {}

  @Post('user')
  async createUser(
    @Body() userData: { name?: string; email: string;},
  ):Promise<UserModel>{
    return this.userService.createUser(userData);
  }
  @Post('todo')
  async createTodo(
    @Body() todoData: { title: string; content?: string; authorEmail: string},
  ):Promise<TodoModel>{
    return this.todoService.createTodo(todoData);
  }

  @Get('user/:id')
  async getUserById(@Param('id') id: number):Promise<UserModel>{
    return this.userService.user({ id: Number(id) });
  }
  @Get('todo/:id')
  async getTodoById(@Param('id') id: number):Promise<TodoModel>{
    return this.todoService.todo({ id: Number(id) });
  }
  @Get('todo')
  async getTodos():Promise<TodoModel[]>{
    return this.todoService.todos({
      where: {
        status: true
      }
    });
  }


  @Put('todo/:id')
  async updateTodo(@Param('id') id: number):Promise<TodoModel>{
    return this.todoService.updateTodo({
      where: { id: Number(id) },
      data: { status: true },
    })
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: number):Promise<UserModel>{
    return this.userService.deleteUser({ id : Number(id) });
  }
  @Delete('todo/:id')
  async deleteTodo(@Param('id') id: number):Promise<TodoModel>{
    return this.todoService.deleteTodo({ id : Number(id) });
  }
  
}
