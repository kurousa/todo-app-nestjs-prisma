import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Todo } from "./todo.model";

@ObjectType()
export class User {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    email: string;

    @Field((type) => String)
    name?: string

    @Field((type) => Todo)
    todos: [Todo]
}
