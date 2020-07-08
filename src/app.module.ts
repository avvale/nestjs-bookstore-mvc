import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookstoreModule } from './bookstore/bookstore.module';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 33001,
            username: 'root',
            password: '123456',
            database: 'bookstore-mvc',
            autoLoadModels: true,
            synchronize: true,
        }),
        BookstoreModule,
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule { }
