export interface Job{
    id: number,
    name: string,
    company: string,
    city: string,
    startDate: Date,
    currentJob: boolean,
    endDate: Date
    jobActivities: Array<jobActivity>
}

interface jobActivity{
    id: number,
    activity: string
}