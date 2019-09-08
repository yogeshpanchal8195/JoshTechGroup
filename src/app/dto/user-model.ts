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

export class NoteDetail{
    id: number
    tags: Array<string>
    title:string
    constructor(length:number,noteTitle?:string){
        this.title=noteTitle || "Title";
        this.id=length;
    }
}

export class NoteModel extends NoteDetail{
    index: number
    notes: Array<NoteDetail>
    user: DetailModel;
    constructor(length:number,noteTitle?:string){
        super(length,noteTitle);
    }
}
