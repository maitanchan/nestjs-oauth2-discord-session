import { Injectable } from '@nestjs/common';
import { AuthProvider } from './interface/auth-provider.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDetail } from './type/user-detail.type';

@Injectable()
export class AuthService implements AuthProvider {

    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) { }

    redirect() {

        return 'OK'

    }

    async validateUser(userDetail: UserDetail): Promise<User> {

        const user = await this.userRepo.findOne({ where: { discordId: userDetail.discordId } })

        if (user) {
            return user
        }

        return await this.createUser(userDetail)


    }

    async createUser(userDetail: UserDetail): Promise<User> {

        const newUser = this.userRepo.create(userDetail)

        await this.userRepo.save(newUser)

        return newUser

    }

    async findUser(discordId: string): Promise<User> {

        return this.userRepo.findOne({ where: { discordId } })

    }

    status() {

        return 'OK'

    }

    logout() {



    }

}
