import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {

  @Field()
  name:string

  @Field()
  key:string

}
