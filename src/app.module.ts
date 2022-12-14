import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { Ingredient } from "./ingredients/ingredients.model";
import { IngredientsModule } from './ingredients/ingredients.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [ User, Ingredient, Role, UserRoles ],
      autoLoadModels: true
    }),
    UsersModule,
    IngredientsModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
