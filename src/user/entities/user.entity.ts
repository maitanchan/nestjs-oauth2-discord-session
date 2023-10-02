import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    discordId: string

    @Column()
    username: string

    @Column()
    discriminator: string

    @Column({ nullable: true })
    avatar: string
}
