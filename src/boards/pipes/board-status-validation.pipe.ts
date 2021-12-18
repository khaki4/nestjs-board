import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

export class BoardSTatusValidationPipe implements PipeTransform {
  private readonly allowedStatus = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: string) {
    try {
      value = value.toUpperCase();
      if (!this.isStatusValid(value as BoardStatus)) {
        throw new BadRequestException(`"${value}" is an invalid status`);
      }
      return value;
    } catch (error) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }
  }

  private isStatusValid(status: BoardStatus): boolean {
    return this.allowedStatus.includes(status);
  }
}
