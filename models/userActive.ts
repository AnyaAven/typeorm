import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

/** Extend User to BaseEntity allows use to use active record syntax instead
 *
 * This can be useful for simplicity but may not be as scaleable
 */
@Entity()
export class UserActive extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", name: "first_name"})
    firstName: string

    @Column({type: "varchar", name: "last_name"})
    lastName: string
}