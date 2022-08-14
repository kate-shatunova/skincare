import { Column, DataType, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({description: "Уникальный идентификатор", nullable: false, example: 1})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({description: "E-mail пользователя", nullable: false, example: "user@mail.com"})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({description: "Пароль", nullable: false, example: "1234567"})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({description: "Статус УЗ пользователя", nullable: true, example: false, default: false})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({description: "Причина бана", nullable: true, example: "Нарушение правил сообщества"})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;
}