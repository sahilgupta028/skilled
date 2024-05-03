import { Message } from "@/model/User"; 
import { Course } from "@/model/Course";

export interface ApiResponse {
    success: boolean;
    message: string;
    isAcceptingMessage? : boolean;
    messages?: Message[];
    courses?: Course[];
    course?: Course;
}