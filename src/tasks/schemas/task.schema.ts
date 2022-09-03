import {Schema} from "mongoose";
import { TasksModule } from "../tasks.module"

export const taskSchema= new Schema ({
    title:String,
    description:String,
    done: Boolean,
});
