import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { BoardsController } from './boards/boards.controller';

@Module({
  imports: [BoardModule],
  controllers: [BoardsController],
  providers: [],
})
export class AppModule {}
