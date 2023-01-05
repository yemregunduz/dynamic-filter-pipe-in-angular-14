import { User } from "./user.model"

export interface ProjectModel {
    id:number,
    title:string
    description:string
    status:string
    owner:User
}