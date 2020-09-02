import { Controller, Get, Post } from '@nestjs/common';
import { PlanService } from './plan.service';

@Controller('plan')
export class PlanController {
  constructor(private planService: PlanService) {
  }

  @Get()
  getPlans() {
    return this.planService.getPlans();
  }

  @Post()
  createPlan() {
    return this.planService.createPlan({ name: 'first plan', startingDate: new Date(Date.now()), durationInWeeks: 12 });
  }
}