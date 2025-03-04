import { PrimaryGeneratedColumn,Column, Entity } from "typeorm";


@Entity()
export class dispatcher{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    cityName:string;

    @Column({unique:true})
    VehicleNumber:number


    
}