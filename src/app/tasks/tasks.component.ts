import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, AddTaskComponent]
})

export class TasksComponent {
@Input({required: true}) name!: string;
@Input({required: true}) userId!: string
isAddingTask = false

constructor(private taskService: TaskService){}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
}

removeTask(id: string) {

}

onStartAddTask(){
  this.isAddingTask = true;
}

onCloseAddTask() {
  this.isAddingTask = false;
}
}
