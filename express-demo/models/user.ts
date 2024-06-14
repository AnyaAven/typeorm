import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", name: "first_name"})
    firstName: string

    @Column({type: "varchar", name: "last_name"})
    lastName: string
}