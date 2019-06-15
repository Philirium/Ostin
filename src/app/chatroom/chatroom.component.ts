import { Component, OnInit, ɵConsole, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { send } from 'q';
import { MatRipple, MatList, MatListItem } from '@angular/material';
import { Location } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
})
export class ChatroomComponent implements OnInit {

  //*** автоскрол, при добавлении новых сообщений ***
  ngOnInit(): void { }
  ngAfterViewInit(): void {
    this.matListItems.changes.subscribe(elements => {
      this.scrollToBottom();
    });
  }
  @ViewChild(MatList, { read: ElementRef }) matList: ElementRef;
  @ViewChildren(MatListItem, { read: ElementRef }) matListItems
  private scrollToBottom(): void {
    try {
      this.matList.nativeElement.scrollTop = this.matList.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
//*** - *** 
  private form: FormGroup = new FormGroup({
    name: new FormControl("User"),
    id : new FormControl(this.getRandomId()),
    from : new FormControl(),
    messageContent : new FormControl(),
  });
  private id:number;
  private messages = [];
  private formMessage$ = {id:0, name: "Another User", messageContent: "" };
  private getRandomId(): number {
    let _id = Math.floor(Math.random() * (1000000)) + 1;
    this.id = _id;
    return _id;
  }
 
  sendMessage(formMessage){
    this.formMessage$.messageContent = formMessage.messageContent;
    if (formMessage.id === this.id) { formMessage.from = "me";
      this.messages.push(formMessage)
    }
    else { formMessage.from = "anotherPerson"; 
      this.messages.push(formMessage);
    }
    
  }
  anotherMessage(){
   ++this.formMessage$.id;
   this.sendMessage(this.formMessage$);
   this.formMessage$.name = "Mr.repit";
  }
  constructor(private location:Location) { }
  goBack(): void {
    this.location.back();
  }
  
  
  
                 
}


