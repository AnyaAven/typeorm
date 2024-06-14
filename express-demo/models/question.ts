import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm"
import { User } from "./user"

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number

  @Column("varchar")
  title: string

  @Column("text")
  text: string

  @Column({type: "varchar", nullable: true, name: "author"})
  author: string

  @ManyToMany(() => User)
  @JoinTable()
  categories: User[]
}