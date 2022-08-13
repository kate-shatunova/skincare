import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientsController } from "./ingredients.controller";
import { IngredientsService } from "./ingredients.service";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  imports: [
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
  ],
  controllers: [AppController, IngredientsController],
  providers: [AppService, IngredientsService]
})
export class AppModule {}
