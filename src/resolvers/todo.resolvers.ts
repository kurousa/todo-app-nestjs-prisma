import { Resolver, Query } from '@nestjs/graphql'
import { Todo } from '../models/todo.model';
import { PrismaService } from 'src/prisma.service';

@Resolver((of) => Todo)
export class TodoResolver {
    constructor(private prisma: PrismaService) {}

    @Query((returns) => [Todo])
    async todos() {
        return this.prisma.todo.findMany();
    }
}