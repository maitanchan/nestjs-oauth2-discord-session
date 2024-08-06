import { Module } from '@nestjs/common';
import { AuthService } from './oauth2.service';
import { AuthController } from './oauth2.controller';
import { DiscordStrategy } from './strategy/discord.strategy';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { SessionSerializer } from './serializer/session.serializer';
import { PassportModule } from '@nestjs/passport';

@Module({

  imports: [

    PassportModule.register({ session: true }),

    ConfigModule.forRoot({}),

    TypeOrmModule.forFeature([User])

  ],

  controllers: [AuthController],

  providers: [

    AuthService,

    DiscordStrategy,

    SessionSerializer

  ]

})
export class AuthModule { }
