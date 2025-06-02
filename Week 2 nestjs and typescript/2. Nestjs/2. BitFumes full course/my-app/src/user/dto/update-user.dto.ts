import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class UpdateUserDto {
    @ApiProperty({ description: 'username', example: 'Sahil Madaan' })
    @IsString()
    name: string;

    @ApiProperty({ description: 'user email', example: 'madaan.sahil27@gmail.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'user password', example: 'kacchaPapad' })
    @IsString()
    password: string;
}

export class UpdateUserResponseDto {
    @ApiProperty({ description: 'username', example: 'Sahil Madaan' })
    @IsString()
    name: string;

    @ApiProperty({ description: 'user email', example: 'madaan.sahil27@gmail.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'user password', example: 'kacchaPapad' })
    @IsString()
    password: string;
}