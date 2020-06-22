import { Module } from '@nestjs/common';
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
            database: 'sequelize-test',
            autoLoadModels: true,
            synchronize: true,
        }),
        BookstoreModule,
    ],
})
export class AppModule { }
