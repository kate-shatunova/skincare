import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({description: "E-mail пользователя", nullable: false, example: "user@mail.com"})
  readonly email: string;

  @ApiProperty({description: "Пароль", nullable: false, example: "1234567"})
  readonly password: string;
}