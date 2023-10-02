import { User } from "../../user/entities/user.entity"
import { UserDetail } from "../type/user-detail.type"

export interface AuthProvider {

    validateUser(userDetail: UserDetail): Promise<User>

    createUser(userDetail: UserDetail): Promise<User>

    findUser(discordId: string): Promise<User>

}