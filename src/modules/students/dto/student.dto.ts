import { Field, ObjectType } from "@nestjs/graphql";
import { FilterableField } from '@nestjs-query/query-graphql'


@ObjectType('Student')
export class StudentDTO {
  @Field()
  id: string

  @FilterableField()
  name:string

  @FilterableField()
  key:string
}