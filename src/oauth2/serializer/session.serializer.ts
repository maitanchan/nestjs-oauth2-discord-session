import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "../../user/entities/user.entity";
import { AuthService } from "../oauth2.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {

    constructor(private readonly authService: AuthService) {

        super()

    }

    serializeUser(user: User, done: Function) {

        done(null, user)

    }

    async deserializeUser(user: User, done: Function) {

        const userDB = await this.authService.findUser(user.discordId)

        return userDB ? done(null, userDB) : done(null, null)

    }

}