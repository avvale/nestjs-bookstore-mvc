import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports: [        
        SequelizeModule.forRootAsync({
           
            useFactory: () => ({
                dialect: 'mysql',
                host: 'localhost',
                port: 33001,
                username: 'root',
                password: '123456',
                database: 'nest-sequ',
                autoLoadModels: true,
                synchronize: true,
                models: [],
            })
        })
    ],
    exports: [
        SequelizeModule
    ]
})
export class SequelizeConfigModule {}