import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from '@nestjs/passport'
import { Profile, Strategy } from 'passport-discord'
import { AuthService } from "../oauth2.service";

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {

    constructor(
        configService: ConfigService,
        private readonly authService: AuthService
    ) {

        super({

            clientID: configService.get('DISCORD_CLIENT_ID'),
            clientSecret: configService.get('DISCORD_CLIENT_SECRET'),
            callbackURL: configService.get('DISCORD_CALL_BACK_URL'),
            scope: ['identify', 'guilds']

        })

    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {

        const { username, discriminator, avatar, id: discordId } = profile

        const userDetail = { username, discriminator, avatar, discordId }

        return await this.authService.validateUser(userDetail)

    }

}