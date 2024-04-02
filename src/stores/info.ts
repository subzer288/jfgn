
export const data = {
    chartData: [
    {
    category:'Frontent',
    icon: 'mdi-remote-desktop',
    data: {
        labels: [
            'Web Technololgies',
            'Vue',
            'Angular',
            'React',
        ],
        datasets: [
            {
            label: 'Frontend',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [100, 70, 80, 80]
            },
            ]
        }
    },
    {
        category:'Backend',
        icon: 'mdi-server',

        data: {
            labels: [
                'Spring Framework',
                'Laravel',
                'Express js',
                'NEXT.js',
            ],
            datasets: [
                {
                label: 'Backend',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [70, 90, 90, 70]
                },
                ]
            }
    },
    {
        category:'DBMS',
        icon: 'mdi-database-check',
        data: {
            labels: [
                'MySQL',
                'Redis',
                'PostgreSQL',
                'MongoDB',
                'Neo4j'
            ],
            datasets: [
                {
                label: 'Database',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [80, 60, 80, 90, 60]
                },
                ]
            }
    },
    {
        category:'Programming Languages',
        icon: 'mdi-language-java',
        data: {
            labels: [
                'Python',
                'Java',
                'PHP',
                'Javascript',
                'C / C++'
            ],
            datasets: [
                {
                label: 'Programming Languages',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [70, 80, 90, 90, 80]
                },
                ]
            }
    }],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
}