import { EntityRepository, Repository } from 'typeorm';
import { PlanEntity } from './types/entities/plan.entity';

@EntityRepository(PlanEntity)
export class PlanRepository extends Repository<PlanEntity> {
  
}