import { Controller, Get, Post, Put, Delete, Body, Param,  } from '@nestjs/common';
import { createTaskDto } from "./dto/create-task.dto";
import {TasksService} from "./tasks.service";
import { Task} from "./interfaces/tasks";

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService){

    }

   @Get() 
    gettasks(): Promise<Task[]>{
        return this.taskService.getTasks();
    }
    @Get(":taskId")
    gettask(@Param("taskId") taskId){
     return this.taskService.getTask(taskId)
    }

    @Post()
    createTask(@Body() task:createTaskDto):string{
        console.log(task);
        
        return "creating a task";
    }

    @Put(":id")
    ActualizandoDatos(@Body() task:createTaskDto, @Param("id") id ):string{
        console.log(task);
        console.log(id);
        return "Update Task";
    }

    @Delete(":id")
    EliminandoDatos(@Param("id") id):string{
        console.log(id);
        return "Delete a Task number: ${id}";
    }

   }
 

