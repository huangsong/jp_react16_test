export interface Author {
    name:string
    face?:string
}

export interface Article {
    id:number
    title:string
    time:number
    thumb?:string
    author?:Author
    tags:string[]
}

export interface User {
    name:string,
    login:boolean
}
