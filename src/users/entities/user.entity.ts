import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { IsEmail } from 'class-validator';
import { Role } from 'src/roles/entities/role.entity';
import { Sale } from 'src/sales/entities/sale.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  @IsEmail({}, { message: 'El correo electrónico no es válido.' })
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, role => role.users)
  @JoinColumn({ name: 'rol_id' })
  rol: Role;

  @OneToMany(() => Sale, sale => sale.user)
  sale: Sale[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}