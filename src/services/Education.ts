import type { Education } from '@/interfaces/Education';
import get  from 'axios';

export default function getEducation(): Promise<Array<Education>>{
    
    return get("https://jfgn-api-c7014685f5af.herokuapp.com/api/education").then(response => response.data as Array<Education>) as Promise<Array<Education>>;;
}