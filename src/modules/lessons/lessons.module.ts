import { Module } from '@nestjs/common';
import { Lesson } from './entities/lesson.entity';
import { LessonDTO } from './dto/lesson.dto';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Lesson])],
      resolvers: [
        {
          DTOClass: LessonDTO,
          EntityClass: Lesson,
          CreateDTOClass: CreateLessonInput,
          UpdateDTOClass: UpdateLessonInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET
        }
      ]
    })
  ],
  providers: []
})
export class LessonsModule {}
