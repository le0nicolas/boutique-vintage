import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Sale } from 'src/sales/entities/sale.entity';
import { Product } from 'src/products/entities/product.entity';

@Entity()
export class SaleDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sale, sale => sale.saleDetail)
  @JoinColumn({ name: 'sale_id' })
  sale: Sale;

  @ManyToOne(() => Product, product => product.saleDetail)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column({ type: 'int' })
  cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}