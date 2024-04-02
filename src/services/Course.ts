import type { Course } from '@/interfaces/Course';
import get  from 'axios';

export default function getCourses(): Promise<Array<Course>>{
    
    return get("https://jfgn-api-c7014685f5af.herokuapp.com/api/course").then(response => response.data as Array<Course>) as Promise<Array<Course>>;
}