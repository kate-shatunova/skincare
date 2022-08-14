import {Body, Controller, Get, HttpStatus, Post} from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: "создание нового пользователя" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: User })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get()
  @ApiOperation({ summary: "получения списка всех пользователей" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [User] })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  getAll() {
    return this.usersService.getAllUsers();
  }

}
