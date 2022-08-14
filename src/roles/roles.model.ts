import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({description: "Уникальный идентификатор", nullable: false, example: 1})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({description: "Значение роли пользователя", nullable: false, example: "ADMIN"})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string;

  @ApiProperty({description: "Описание роли", nullable: false, example: "Администратор"})
  @Column({type: DataType.STRING, allowNull: false})
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];

}