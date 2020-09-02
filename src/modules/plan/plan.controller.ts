import { Controller, Get } from '@nestjs/common';
import { PlanService } from './plan.service';

@Controller('plan')
export class PlanController {
  constructor(private planService: PlanService) {
  }

  @Get()
  getUser() {
    return this.planService.getUser();
  }
}