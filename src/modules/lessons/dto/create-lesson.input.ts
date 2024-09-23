import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLessonInput {
  @Field(() => String)
  description: string
}
