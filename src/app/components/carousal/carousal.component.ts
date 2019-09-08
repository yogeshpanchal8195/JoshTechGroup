import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { CarouselComponent } from 'angular-bootstrap-md';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit, AfterViewInit {

  @ViewChild(CarouselComponent, { static: false }) carousel: CarouselComponent;
  delay = 2000;
  index = 0;
  int: any;  
  slides=[
    {url:"https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",type:"img",link:"",label:"Slide1"},
    {url:"https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",type:"img",link:"",label:"Slide2"},
    {url:"https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",type:"img",link:"",label:"Slide3"},
    // {url:"https://mdbootstrap.com/img/video/Tropical.mp4",type:"video",link:"",label:"Slide3"},
    // {url:"https://mdbootstrap.com/img/video/forest.mp4",type:"video",link:"",label:"Slide4"},
  ]

  constructor() { }

  ngOnInit() {
  }
  
  ngDoCheck(){
    let videos = document.getElementsByTagName('video');
    Array.from(videos).forEach(element => {
      if(element){
        let playPromise=element.play();
        if (playPromise !== undefined) {
          playPromise.then(_ => {
          })
          .catch(error => {
          });
        }
      }
    });
  }

  ngAfterViewInit() {
  }

  previous() {
    this.carousel.previousSlide();
  }
  
  next() {
    this.carousel.nextSlide();
  }


}
