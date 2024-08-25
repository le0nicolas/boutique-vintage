import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { SaleDetail } from 'src/saleDetails/entities/SaleDetail.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @ManyToOne(() => User, user => user.sale)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => SaleDetail, saleDetail => saleDetail.sale)
  saleDetail: SaleDetail[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}