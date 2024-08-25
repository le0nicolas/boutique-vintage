import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { CategoryService } from '../categories/category.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly categoryService: CategoryService
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({ where: { id }});
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const category = await this.categoryService.findOne(createProductDto.category_id);
    if (!category) {
        throw new NotFoundException('Categoría no encontrada.');
    }

    const newProduct = this.productRepository.create({
    ...createProductDto,
    category: category, 
    });

    return this.productRepository.save(newProduct);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
    throw new NotFoundException(`El producto a modificar no existe.`);
    }

    if(updateProductDto.category_id){
        const category = await this.categoryService.findOne(updateProductDto.category_id);
        if (!category) {
            throw new NotFoundException('Categoría no encontrada.');
        }
        const newProduct = this.productRepository.create({
            ...updateProductDto,
            category: category, 
        });
        Object.assign(product, newProduct);
        return this.productRepository.save(product);
    }

    Object.assign(product, updateProductDto);
    return this.productRepository.save(product);
  }
}