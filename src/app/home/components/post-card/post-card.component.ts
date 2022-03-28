import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  postdata=[
    {
      username:"joe biden",
      userdp:"https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg",
      imgsrc:"https://freerangestock.com/sample/31838/an-ocean-sunset-landscape.jpg",
      mutual_friend_1:"obama",
      mutual_friend_2:"hilary",
      become_friend_1:"osama",
      become_friend_2:"trump",
      last_seen:"20h",
      no_of_likes:"10k",
      no_of_comments:"24k",
      comment_user_dp:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      comment_user_name:"john king",
      comment:"nice pic Mr Potus"


    },
    {
      username:"joe biden",
      userdp:"https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg",
      imgsrc:"https://freerangestock.com/sample/31838/an-ocean-sunset-landscape.jpg",
      mutual_friend_1:"obama",
      mutual_friend_2:"hilary",
      become_friend_1:"osama",
      become_friend_2:"trump",
      last_seen:"20h",
      no_of_likes:"10k",
      no_of_comments:"24k",
      comment_user_dp:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      comment_user_name:"john king",
      comment:"nice pic Mr Potus"


    }
  ]


}
