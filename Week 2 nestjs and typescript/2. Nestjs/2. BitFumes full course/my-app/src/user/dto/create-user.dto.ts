import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({description: 'username'})
  @IsNotEmpty()
  name: string;
  
  @ApiProperty({description: 'user email'})
  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  @ApiProperty({description: 'user password'})
  @IsString()
  password: string;

}


export class CreateUserResponseDto {
  @ApiProperty({description: 'username'})
  @IsNotEmpty()
  name: string;
  
  @ApiProperty({description: 'user email'})
  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  @ApiProperty({description: 'user password'})
  @IsString()
  password: string;

}