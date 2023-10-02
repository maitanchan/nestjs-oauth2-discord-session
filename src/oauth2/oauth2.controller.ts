import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './oauth2.service';
import { DiscordGuard } from './guard/discord.guard';
import { Request } from 'express';
import { AuthencticatedGuard } from './guard/authenticated.guard';

@Controller('oauth2')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @UseGuards(DiscordGuard)
  @Get('discord/login')
  login() {

  }

  @UseGuards(DiscordGuard)
  @Get('discord/redirect')
  redirect() {

    return this.authService.redirect()


  }

  @UseGuards(AuthencticatedGuard)
  @Get('status')
  status(@Req() req: Request) {

    console.log(req.user)

    return this.authService.status()

  }

  @Get('logout')
  logout() {

    return this.authService.logout()

  }


}
