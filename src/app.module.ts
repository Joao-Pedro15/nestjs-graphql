import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './modules/students/students.module';
import { Student } from './modules/students/entities/student.entity';
import { DisciplinesModule } from './modules/disciplines/disciplines.module';
import { Discipline } from './modules/disciplines/entities/discipline.entity';
import { Lesson } from './modules/lessons/entities/lesson.entity';
import { Content } from './modules/contents/entities/content.entity';
import { ContentsModule } from './modules/contents/contents.module';
import { LessonsModule } from './modules/lessons/lessons.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "test",
      password: "test",
      database: "test",
      entities: [Student, Discipline, Lesson, Content],
      synchronize: true, // habilita o true somente em producao
      loggin:true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
    }),
    StudentsModule,
    DisciplinesModule,
    ContentsModule,
    LessonsModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
