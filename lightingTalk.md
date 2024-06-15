# ENUMS

``` ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm"
//Using array with enum values:

export type UserRoleType = "admin" | "editor" | "ghost",

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    //enum: string[]|AnyEnum
    @Column({
        type: "enum",
        enum: ["admin","editor","ghost"],
        default: "ghost"
    })
    role: UserRoleType
}

/************************************* DUPS */

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    size: string
}

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    answersCount: number
}

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    viewCount: number
}

/** HAVING A BASE CLASS */
export abstract class Content {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string
}
@Entity()
export class Photo extends Content {
  @Column()
  size: string
}

@Entity()
export class Question extends Content {
  @Column()
  answersCount: number
}

@Entity()
export class Post extends Content {
  @Column()
  viewCount: number
}