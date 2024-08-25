import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { AuthModule } from './authentication/auth.module';
import { RoleModule } from './roles/role.module';
import { ProductModule } from './products/product.module';
import { CategoryModule } from './categories/category.module';
import { SaleModule } from './sales/sale.module';
import { SaleDetailModule } from './saleDetails/saleDetail.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    RoleModule,
    ProductModule,
    CategoryModule,
    SaleModule,
    SaleDetailModule
  ],
})
export class FeaturesModule {}
