import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  durationInWeeks: number;

  @Column()
  startingDate: Date;

  @Column({ nullable: true })
  lastModificationDate?: Date;

  @Column({ default: true })
  isActive: boolean;
}
