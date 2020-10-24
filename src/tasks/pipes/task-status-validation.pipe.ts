import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TasksStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TasksStatus.OPEN,
    TasksStatus.IN_PROGRESS,
    TasksStatus.DONE,
  ];

  transform(value: any): any {
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is invalid status`);
    }

    return value;
  }

  private isStatusValid(value: any): boolean {
    const idx = this.allowedStatuses.indexOf(value);

    return idx !== -1;
  }
}
