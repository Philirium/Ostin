import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private checked = false
  private tasks = [
    {task: "Забрать желтую коробку со склада",  done: 1, ready: true},
    {task: "Забрать желтую коробку со склада",  done: 0},
    {task: "Забрать желтую коробку со склада",  done: 0},
    {task: "Забрать желтую коробку со склада",  done: 0},]
    taskDoneToggle(task){
    task.ready = !task.ready
  }
    
    closePanel(){
      
  }
  start = false;

  constructor() { }

  ngOnInit() {
    setTimeout(()=> this.start = true, 1) // аккардионы открываются при запуске анимации, с сет тайматом не открываются
  }

}
