import type { Job } from '@/interfaces/Job';
import get  from 'axios';

export default function getJobs(): Promise<Array<Job>>{
    
    return get("https://jfgn-api-c7014685f5af.herokuapp.com/api/job").then(response => response.data as Array<Job>) as Promise<Array<Job>>;;
}