
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
    chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    },
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    courses : [{
        course: 'Frontend with Vue.js',
        institution: 'Platzi',
        startDate: {
            month: 7,
            year: 2011
        },
        currentlyLearning: false,
        endDate: {
            month: 6,
            year: 2015
        },
    }, {
        course: 'Algorithms and data structures',
        institution: 'Leetcode',
        startDate: {
            month: 0,
            year: 2024
        },
        currentlyLearning: true,
        endDate: {
            month: 0,
            year: 0
        },
    }, {
        course: 'System Design',
        institution: 'Leetcode',
        startDate: {
            month: 0,
            year: 2024
        },
        currentlyLearning: true,
        endDate: {
            month: 6,
            year: 2015
        },
    }, {
        course: 'Java university',
        institution: 'Udemy',
        startDate: {
            month: 1,
            year: 2019
        },
        currentlyLearning: false,
        endDate: {
            month: 10,
            year: 2019
        },
    }, {
        course: 'Data scientist',
        institution: 'Platzi',
        startDate: {
            month: 11,
            year: 2023
        },
        currentlyLearning: false,
        endDate: {
            month: 1,
            year: 2024
        },
    }],
    education : [{
        name: 'Technician in information technologies',
        school: 'Centro de Enseñanza Tecnica Industrial, CETI',
        city: 'Guadalajara',
        startDate: {
            month: 7,
            year: 2011
        },
        currentStudent: false,
        endDate: {
            month: 6,
            year: 2015
        },
        status: 'Graduated by project.'
    }, {
        name: 'Software development Engineer',
        school: 'Centro de Enseñanza Tecnica Industrial, CETI',
        city: 'Guadalajara',
        startDate: {
            month: 7,
            year: 2015
        },
        currentStudent: false,
        endDate: {
            month: 11,
            year: 2019
        },
        status: 'Graduated by Internship.'
    }],
    jobs : [{
        name: 'System Administrator and Backend Developer',
        company: 'ITESS',
        city: 'Guadalajara',
        startDate: {
            month: 0,
            year: 2018
        },
        currentJob: false,
        endDate: {
            month: 0,
            year: 2020
        },
        activities: [
            'Manage and maintain to the MLS and CRM of AMPI Guadalajara, fixing bugs, developing new features using web technologies like Laravel or Angular',
            'Develop scripts in PHP to do different task like export databases, generate emails or generate reports',
            'Frontend development using different web technologies'
        ]},{
        name: 'Freelance developer',
        company: 'Self-Employed',
        city: 'Guadalajara',
        startDate: {
            month: 2,
            year: 2020
        },
        currentJob: false,
        endDate: {
            month: 6,
            year: 2021
        },
        activities: [
            'Creation of different websites, APIs or landing pages using different technologies like Wordpress, React, Laravel, ExpressJS'
        ]},{
        name: 'System administrator and Backend Developer',
        company: 'AMPI',
        city: 'Guadalajara',
        startDate: {
            month: 0,
            year: 2022
        },
        currentJob: false,
        endDate: {
            month: 10,
            year: 2023
        },
        activities: [
        'Administration of all the MLS and CRM of the association like Wiggot, AMPI System, ValorEs, SADAM',
        'Develop of API for the associates to consult information in the AMPI Database using technologies like Laravel, SpringBoot',
        'Maintaining of the databases up to date',
        'Creation of courses about how to use all the tools provided by the association',
        ]}
    ]
}