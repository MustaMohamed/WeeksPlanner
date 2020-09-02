import { Injectable, Scope } from '@nestjs/common';
import { PlanRepository } from './plan.repository';
import { CreatePlanDto, PlanEntity } from './types';

@Injectable({
  scope: Scope.REQUEST,
})
export class PlanService {
  constructor(private planRepository: PlanRepository) {
  }

  private counter = 0;

  async getPlans(): Promise<PlanEntity[]> {
    const result = await this.planRepository.find();
    return result;
  }

  async createPlan(plan: CreatePlanDto): Promise<PlanEntity> {
    const result = await this.planRepository.save(plan);
    return result;
  }

}