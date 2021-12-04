import { ObjectType, Field, Int } from "@nestjs/graphql";
import { User } from "./user.model";

@ObjectType()
export class Todo {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    title: string;

    @Field((type) => String)
    content?: string;

    @Field((type) => Boolean)
    status?: boolean;

    @Field((type) => User)
    author?: User;

    @Field((type) => Int)
    authorId?: number;
}