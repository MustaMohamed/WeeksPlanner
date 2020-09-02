import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST,
})
export class PlanService {
  private counter = 0;

  getUser(): string {
    this.counter++;
    return 'user => ' + this.counter;
  }
}