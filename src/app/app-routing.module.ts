import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { MenuComponent } from './menu/menu.component';
import { TasksComponent } from './tasks/tasks.component';
import { StaffComponent } from './staff/staff.component';
import { FilialTreeComponent } from './filial-tree/filial-tree.component';
import { ContactChatListComponent } from './contact-chat-list/contact-chat-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent, data:{animation: 'HomePage'}},
  { path: 'chat', component: ChatroomComponent, data:{animation: 'AboutPage'}},
  { path: 'tasks', component: TasksComponent, data:{animation: 'TasksPage'}},
  { path: 'staff', component: StaffComponent, data:{animation: 'AboutPage'}},
  { path: 'filials', component: FilialTreeComponent, data:{animation: 'AboutPage'}},
  { path: 'chatcontact', component: ContactChatListComponent , data:{animation: 'AboutPage'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
