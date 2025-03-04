import { IsString ,IsInt} from "class-validator";

export class dispactherServiceDto {

    @IsInt()
    vehicleId:number;

    @IsInt()
    vehicleNumber : number;

    @IsString()
    city:String

}