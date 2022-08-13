import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientsController } from "./ingredients/ingredients.controller";
import { IngredientsService } from "./ingredients/ingredients.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'skincare',
      models: [],
      autoLoadModels: true
    }),
    UsersModule,
  ],
  controllers: [AppController, IngredientsController],
  providers: [AppService, IngredientsService]
})
export class AppModule {}
