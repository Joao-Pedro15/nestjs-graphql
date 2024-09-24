import { FilterableField } from '@nestjs-query/query-graphql';
import { InputType, Int, Field } from '@nestjs/graphql';
import { UpdateLessonInput } from 'src/modules/lessons/dto/update-lesson.input';

@InputType()
export class CreateContentInput {

  @Field(() =>  String, { nullable: true } )
  description?: string

  @Field(() =>  String, { nullable: true } )
  linkContent?: string

  @Field(() => String, { nullable: true })
  lessonId?: string

  // @Field(() => UpdateLessonInput, { nullable: true })
  // lesson?: UpdateLessonInput

}
