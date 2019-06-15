import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MyShopComponent } from './my-shop/my-shop.component';
import { TasksComponent } from './tasks/tasks.component'; 
import { MatAccordion } from '@angular/material';
import { StaffComponent } from './staff/staff.component';
import { FilialTreeComponent } from './filial-tree/filial-tree.component';
import { ContactChatListComponent } from './contact-chat-list/contact-chat-list.component';




@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    MenuComponent,
    SidenavComponent,
    MyShopComponent,
    TasksComponent,
    StaffComponent,
    FilialTreeComponent,
    ContactChatListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
