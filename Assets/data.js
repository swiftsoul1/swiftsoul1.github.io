let data = {
    pages: [
        {
            slug: 'home',
            intro: {
                eyebrow: 'Jonah Spear · Full-Stack Developer',
                title: 'Software projects, websites, and interactive experiences.',
                summary: 'I build practical web experiences and business tools, translating requirements and visual plans into responsive, maintainable software.'
            },
            stats: [
                { value: '6', label: 'selected real-world projects' },
                { value: '3', label: 'museum web collaborations' },
                { value: '2025–Now', label: 'software development at Mail Masters' }
            ],
            capabilities: [
                { title: 'Web applications', text: 'Responsive interfaces, content systems, forms, and data-backed workflows.' },
                { title: 'Business websites', text: 'Clear information architecture and maintainable sites built around real operating needs.' },
                { title: 'Interactive experiences', text: 'Design implementation, custom navigation, maps, profiles, and exhibition content.' },
                { title: 'Mail-processing systems', text: 'Software and workflow thinking grounded in hands-on production experience.' }
            ],
            stack: [
                { label: 'Frontend', value: 'Vue.js, JavaScript, HTML, CSS, Bootstrap, React' },
                { label: 'Backend & data', value: 'Python, Node.js, PHP, SQL/NoSQL, MongoDB' },
                { label: 'Platforms & tools', value: 'Git, WordPress, Azure DevOps, Adobe tools' },
                { label: 'Practices', value: 'Responsive design, accessibility, APIs, debugging, stakeholder iteration' }
            ],
            education: [
                { school: 'University of New Mexico', degree: 'M.S. Computer Science', date: 'Current', gpa: 'GPA 3.19' },
                { school: 'New Mexico Highlands University', degree: 'B.S. Software Systems Design', date: '2024', gpa: 'GPA 3.19' },
                { school: 'Central New Mexico Community College', degree: 'A.A.S. Computer Information Systems', date: '2021', gpa: 'GPA 3.29' }
            ]
        },
        {
            slug: 'portfolio',
            intro: 'Production work, institutional collaborations, and website projects. Concept demos are separated below so it is always clear what is live work and what is a capability study.',
            items: [
                {
                    id: 'yokai',
                    name: 'Yokai Interactive Exhibition',
                    organization: 'Museum of International Folk Art',
                    role: 'Web Developer Intern · 2020',
                    featured: 'Assets/Moifa.PNG',
                    href: 'https://yokai.moifa.org/',
                    linkText: 'Visit live site',
                    summary: 'Built the HTML pages and Vue application structure for an online museum exhibition. Translated a designer’s Adobe plans into scalable webpages and incorporated the curator’s content edits and critiques.',
                    tags: ['Vue.js', 'HTML/CSS', 'Bootstrap', 'Design implementation']
                },
                {
                    id: 'mailmasters',
                    name: 'Mail Masters of the Southwest',
                    organization: 'K&R Enterprises / Mail Masters',
                    role: 'Software Developer · 2025–Current',
                    featured: 'Assets/mailmasters.png',
                    href: 'https://mailmasterssw.com/',
                    linkText: 'Visit live site',
                    summary: 'Recreated the company website and supports software and workflow work within a commercial mail-processing environment. The site organizes printing, mailing, mailroom management, and quote-request information for New Mexico businesses.',
                    tags: ['Web development', 'Business systems', 'Workflow analysis', 'Production operations']
                },
                {
                    id: 'roadrunner',
                    name: 'Roadrunner Auctions',
                    organization: 'Client website',
                    role: 'Website development',
                    featured: 'Assets/roadrunner.png',
                    href: 'https://roadrunnerauctions.com/',
                    linkText: 'Visit live site',
                    summary: 'A website focused on presenting auction services clearly, directing buyers to current listings, and giving sellers a straightforward path to learn about the process.',
                    tags: ['Responsive web', 'Content architecture', 'Client work']
                },
                {
                    id: 'hr-integrity',
                    name: 'HR Integrity Liquidation Services',
                    organization: 'HR Integrity',
                    role: 'Webmaster · 2016–Current',
                    featured: 'Assets/hr-integrity.png',
                    href: 'https://hrintegrityservices.com/',
                    linkText: 'Visit live site',
                    summary: 'Created and maintains the company website while supporting the business through estate-sale preparation, pricing research, customer service, and front-desk operations.',
                    tags: ['Website maintenance', 'Business operations', 'Content updates']
                },
                {
                    id: 'dressing-with-purpose',
                    name: 'Dressing With Purpose',
                    organization: 'Museum of International Folk Art',
                    role: 'Web Developer Intern · 2021',
                    featured: 'Assets/DWP.PNG',
                    href: 'http://dressingwithpurpose.moifa.org/',
                    linkText: 'Visit live site',
                    summary: 'Built an interactive map with custom pins, descriptive content, user submissions, images, and an administrative review flow for approving or removing entries.',
                    tags: ['Interactive maps', 'API', 'Forms', 'Admin workflow']
                },
                {
                    id: 'artist-portal',
                    name: 'NM History Museum Artist Portal',
                    organization: 'New Mexico History Museum',
                    role: 'Web Developer Intern · 2021',
                    featured: 'Assets/NMHM.PNG',
                    href: 'https://portal.nmhistorymuseum.org/',
                    linkText: 'Visit live site',
                    summary: 'Created a custom WordPress theme matching the museum site, a searchable artist registry, and profile pages where artists could share work and social links.',
                    tags: ['WordPress', 'Custom theme', 'Database', 'Profiles']
                }
            ],
            demos: [
                { id: 'home-demo', name: 'Home page', summary: 'Headline, value proposition, calls to action, and service overview.' },
                { id: 'about-demo', name: 'About page', summary: 'Company story, values, people, and credibility.' },
                { id: 'contact-demo', name: 'Contact page', summary: 'Clear contact details and an accessible inquiry form.' },
                { id: 'store-demo', name: 'Store page', summary: 'Product discovery, pricing, and cart-ready actions.' },
                { id: 'gallery-demo', name: 'Gallery page', summary: 'A responsive visual collection with categories and captions.' },
                { id: 'profile-demo', name: 'Profile page', summary: 'Identity, activity, details, and account actions.' },
                { id: 'political-demo', name: 'Political campaign', summary: 'Candidate introduction, priorities, events, endorsements, and supporter actions.' }
            ]
        },
        {
            slug: 'contact',
            email: 'Jonah.Spear@yahoo.com',
            phone: '(505) 389-0960',
            location: 'Albuquerque, New Mexico',
            linkedin: 'https://www.linkedin.com/in/jonah-spear-li/',
            intro: 'Interested in my work or looking for a developer? Email me or connect on LinkedIn.'
        }
    ]
};
