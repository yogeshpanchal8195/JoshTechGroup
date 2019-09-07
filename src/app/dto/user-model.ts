export class UserModel{
    about: string
    index: number
    value:number
    label:string
    name: string
    tags: Array<DetailModel>
}

export class DetailModel{
    id:number
    name:string
}

export class NoteModel{
    index: number
    notes: Array<NoteDetail>
    user: DetailModel
}

export class NoteDetail{
    id: number
    tags: Array<string>
    title:string
}