import { Type } from 'class-transformer';
import { IsArray, IsInt, isInt, ValidateNested } from 'class-validator';

class OrderItemDto {
  @IsInt()
  productId: number;
  @IsInt()
  price: number;
  @IsInt()
  quantity: number;
  @IsInt()
  city: string;
}

export class createOrderDto {
  @IsInt()
  customerId: number;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
