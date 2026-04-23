let data = {
    pages:[
        //home
        {
            slug: 'home',
            skills:[
                'Programming languages: C#, C++, Java, Javascript, HTML/CSS, XML/XAML layouts, Python, SQL/NoSQL, PHP',
                'User Interfaces: Proficient with design structure standard java/python UI libraries, windows and WPF forms  and many other presentation tools.',
                'Web and App Design: Understanding of Bootstrap, React-native, Vue, ASP.net Web design structures, PHP, HTML, CSS, and Javascript to create Web and phone app as well as Knowledge of working with Android based apps.',
                'Advanced Problem-Solving Skills: Understands use of object orientated programming for the use of advanced arithmetic to move, store and manipulate data',
                'SQL and NoSQL database design: create, edit, data-mine, connect to a data base using SQL standards in many environments.',
                'Experience using GitHub and Azure DevOps',
                
            ],
            educations:[
                {
                    name: 'New Mexico Highlands University, Albuquerque, NM',
                    date: 'Spring 2020-Spring 2024',
                    degree: 'BSSD “Bachelors of Software Systems Design"',
                    gpa:'GPA: 3.43',
                },
                {
                    name: 'Central New Mexico Community College, Albuquerque, NM',
                    date: 'September 2016-Spring 2020',
                    degree: 'AAS “Computer Information Systems (CIS) - Programming Concentration Degree”',
                    gpa:'GPA: 3.29',
                },
            ],
            workplaces:[
                 {
                    company: 'New Mexico Highlands University-DWP internship',
                    date:'June 2021-August 2021',
                    title: 'Web Developer Intern',
                    tasks:[
                        'Used a custom map template and custom pins with an api to create a world map for displaying pins associated with desriptive entries',
                        'Created a form so users could add pins information and pictures to the map.',
                        'Created an admin login and management page for filtering through user submitions to aprove what was seen on the map',
                        
                    ]
                },
                 {
                    company: 'New Mexico Highlands University-NMHM internship',
                    date:'June 2021-August 2021',
                    title: 'Web Developer Intern',
                    tasks:[
                        'Created a database registry for artists categorized searching for median type, tribe, alphabetical etc.',
                        'Created a custom wordpress theme to match the already existing website.',
                        'Created a custom profile template for displaying artist information with custom icons for socail medias',
                        
                    ]
                },
                {
                    company: 'New Mexico Highlands University-Yokai Exhibit internship',
                    date:'June 2020-August 2020',
                    title: 'Web Developer Intern',
                    tasks:[
                        'Worked with a team to create a web-based exhibit',
                        'Responsible for creating Webpages based on the designers ideas.',
                        'Worked with Curator of the Museum to ensure content was accurate.',
                        'Created organized data structure based on which page was to be displayed.',
                        
                    ]
                },
                {
                    company: 'HR Integrity Estate Liquidation Services',
                    date:'June 2016 – Current',
                    title: 'Cashier',
                    tasks:[
                        'Researched antiques and high-end household items to be sold at estate sales',
                        'Responsible for handling cash, credit or check transactions with customers',
                        'Ensure pricing is correct',
                        'Reconciled all cash and credit payments at end of each day',
                        'Aided customers with various needs',
                        
                    ]
                },
            ]
        },
        //portfolio
        {
            slug: 'portfolio',
            items:[
                 {
                    name:'NMHU-Portal Artist Program',
                    featured:'Assets/NMHM.PNG',
                    link:{
                        ref:'https://portal.nmhistorymuseum.org/',
                        text:'Live Site'
                    },
                    summary:'Created a custom wordpress theme using a barebones template to create a database of the artists showcasing their artwork at the museum and created a inormation page foe the artists so that people could viewthem online.',
                },
                 {
                    name:'Moifa-Dressing With Purpose',
                    featured:'Assets/DWP.PNG',
                    link:{
                        ref:'http://dressingwithpurpose.moifa.org/',
                        text:'Live Site'
                    },
                    summary:'Implemented a custom world map with custom markers associated to custom entries. created a form that users can imput pictures, coordinates for the map and descriptions for points. created an admin style login to sort through users entries and approve them to put on the map',
                },
                {
                    name:'Moifa-Yokai Exhibition',
                    featured:'Assets/Moifa.PNG',
                    link:{
                        ref:'https://yokai.moifa.org/',
                        text:'Live Site'
                    },
                    summary:'Worked with the staff of the museum, a student designer and was supervised by an NMHU teacher to create an Online Version of the "Yokai: Ghost and Demons of Japan" exhibit at the Santa Fe Museum of natural folk art, so that it could still be "visitable" during the Covid Lockdown',
                },
                {
                    name:'JavaScript Dnd Character Creator',
                    featured:'Assets/DND.PNG',
                    link:{
                        ref:'https://github.com/swiftsoul1/JS-BSSD3520-Midterm',
                        text:'Github Repository'
                    },
                    summary:'A simple Demo of Javascript code to create a basic level one character Based on what the user chooses. This project displays Bootstrap/CSS, HTMl and Javascript abilities in a webbased enviroment.',
                },
            ]
        },
        //contact
        {
            slug:'contact',
        }
    ]
}