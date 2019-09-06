import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    BooksModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
