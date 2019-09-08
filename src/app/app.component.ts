
import { Component, ViewChild, OnInit, Output, EventEmitter, ElementRef, ViewChildren, QueryList, AfterViewInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { CarousalComponent } from './components/carousal/carousal.component';
import { HttpClient } from '@angular/common/http';
import { UserModel, NoteModel, NoteDetail } from './dto/user-model';
import { MatSelectChange, MatSelect } from '@angular/material/select';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {

  @ViewChild(MatSelect,{static:false}) matSelect: MatSelect;
  @Output() selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();
  @ViewChild(CarousalComponent, { static: false }) carousal: CarousalComponent
  @ViewChild(MatAccordion, { static: false }) acc: MatAccordion
  @ViewChild(MatSelect, { static: false }) select: MatSelect
  @ViewChild('parent',{static:false}) parent :any;
  @ViewChild('svg',{static:false}) svg :any;
  @ViewChildren('point') points :QueryList<any>;

  user: UserModel = new UserModel();;
  userList: Array<UserModel> = []
  notes: Array<NoteModel> = [];
  currUser:UserModel=new UserModel()
  multi:boolean;
  width:number=0
  openAllContent:boolean
  height:number=0;
  itemList:Array<NoteDetail>=[]
  slides: Array<any> = [
    [{ url: "/assets/img/Untitled-1_03.jpg", type: "img" },{ url: "/assets/img/Untitled-2_03.jpg", type: "img" },{ url: "/assets/img/jack-sparrow.jpg", type: "img" }],
    [{ url: "/assets/img/aventador_lamborghini.jpg", type: "img" },
    // { url: "/assets/img/Batman-Movie-Joker.jpg", type: "img" },
    { url: "/assets/img/Untitled-1_03.jpg", type: "img" },{ url: "/assets/img/Untitled-2_03.jpg", type: "img" }],
    [{ url: "/assets/img/jack-sparrow.jpg", type: "img" },{ url: "/assets/img/aventador_lamborghini.jpg", type: "img" },{ url: "/assets/img/Batman-Movie-Joker.jpg", type: "img" }]
  ];

  list:Array<any>=[
    {value:0,label:"aa"},
    {value:1,label:"aa"},
    {value:2,label:"aa"},
    {value:3,label:"aa"},
    {value:4,label:"aa"},
  ]

  constructor(
    private http: HttpClient,
    private vcr:ViewContainerRef,
    private cfr:ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.http.get("https://api.myjson.com/bins/thbgx").subscribe((otherUsers: Array<UserModel>) => {
      if (otherUsers && otherUsers.length) {
        console.log(otherUsers);
        this.userList = otherUsers;
        this.userList.forEach((user)=>{
          user.value=user.index;
          user.label=user.name
        })
        this.currUser=this.userList[0];
        console.log(this.currUser)
      }
    })

    this.http.get("https://api.myjson.com/bins/orzsh").subscribe((user: Array<UserModel>) => {
      if (user && user.length) {
        this.user = user[0];
        console.log(user);
      }
    })

    this.http.get("https://api.myjson.com/bins/7if8x").subscribe((notes: Array<NoteModel>) => {
      if (notes && notes.length) {
        console.log(notes);
        this.notes = notes;
        this.itemList=this.notes[0].notes;
      }
    })
    // setTimeout(()=>{
    //   this.acc.openAll()
    // },2000)
  }
  
  ngDoCheck() {
    setTimeout(() => {
      let list = document.getElementsByClassName('loop');
      let list2 = document.getElementsByClassName('loop2');
      let i = 9
      Array.from(list).forEach((element: any) => {
        element.children[0].children[0].style.transform = 'scale(0.' + i + ')';
        if (i >= 3)
          i--;
      })
      let j = 9
      Array.from(list2).forEach((element: any) => {
        element.children[0].children[0].style.transform = 'scale(0.' + j + ')';
        if (j >= 3)
          j--;
      })
    }, 1000)
  }


  ngAfterViewInit(){
  }


  selectionChanged(event: MatSelectChange) {
    this.selectionChange.emit(new MatSelectChange(this.matSelect, event.value));
    this.currUser=this.userList.find((element)=>element.index==event.value)
    console.log(this.currUser);
  } 

  addNewExpansion(){
    let newId:number;
    if(this.itemList.length){
      newId=this.itemList[this.itemList.length -1].id + 1;
    }else{
      newId=1;
    }
    this.itemList.push(new NoteDetail(newId, "Title"));
  }

  OpenAll(){
    if(!this.itemList.length)
    return
    this.openAllContent=!this.openAllContent;
    if(this.openAllContent){
      this.acc.openAll()
    }else{
      this.acc.closeAll()
    }
  }

  deleteExp(i:number){
    this.itemList.splice(i,1);
  }
}



