import { Field, ObjectType } from "@nestjs/graphql";
import { FilterableField } from '@nestjs-query/query-graphql'
import { BaseDTO } from "src/modules/bases/dto/base.dto";


@ObjectType('Student')
export class StudentDTO extends BaseDTO{

  @FilterableField()
  name:string

  @FilterableField()
  key:string
}