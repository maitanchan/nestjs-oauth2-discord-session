import { Module } from '@nestjs/common';
import { AuthModule } from './oauth2/oauth2.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'

@Module({

  imports: [

    ConfigModule.forRoot({}),

    TypeOrmModule.forRoot({

      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number.parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true

    }),

    AuthModule,

    UserModule,

  ],

})
export class AppModule { }
