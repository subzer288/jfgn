import type { Technology } from '@/interfaces/Technology';
import get  from 'axios';

export default function getTechnologies(): Promise<Array<Technology>>{
    
    return get("https://jfgn-api-c7014685f5af.herokuapp.com/api/technologies").then(response => response.data as Array<Technology>) as Promise<Array<Technology>>;;
}