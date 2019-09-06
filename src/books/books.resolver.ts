import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class BooksResolver {

  @Query(() => String)
  async hello() {
    return 'hello';
  }

}
