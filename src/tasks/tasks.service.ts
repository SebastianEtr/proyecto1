import { Injectable } from '@nestjs/common';
import { Task } from "./interfaces/tasks";
import {InjectModel} from "@nestjs/mongoose";
import { Model, model } from "mongoose";
import { taskSchema} from "./schemas/task.schema";

@Injectable()
export class TasksService {


    constructor(@InjectModel("Task") private taskModel: Model<Task>){}


       async getTasks(){
        return await this.taskModel.find();
        }

        async getTask(id:string){
         return await this.taskModel.findById(id);
        }
    
}
