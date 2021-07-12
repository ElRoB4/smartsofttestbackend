import { IsString, IsInt } from 'class-validator';
export class CreateConfigurationDto {
    @IsInt()
    readonly Id: number;
    @IsInt()
    readonly TableTypeId: number; 
    
    }