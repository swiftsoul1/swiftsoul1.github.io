let HomePage = {
    props: ['pages'],
    data: function () {
        return {
            page: this.pages[0],
            projects: this.pages[1].items,
            contact: this.pages[2]
        };
    },
    template: `
<main class="resume-home">
    <header class="resume-header">
        <div class="container resume-header-grid">
            <div>
                <p class="eyebrow">Jonah Spear</p>
                <h1>Full-Stack Developer</h1>
                <p class="resume-summary">Software developer in Albuquerque, New Mexico, building practical websites, interactive experiences, and business tools. Experienced translating designs and stakeholder requirements into responsive, maintainable software.</p>
            </div>
            <address class="resume-contact">
                <a :href="'mailto:' + contact.email">{{ contact.email }}</a>
                <a :href="'tel:+15053890960'">{{ contact.phone }}</a>
                <span>{{ contact.location }}</span>
                <a :href="contact.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn profile <span aria-hidden="true">↗</span></a>
            </address>
        </div>
        <div class="container resume-actions">
            <router-link to="/portfolio">View project archive</router-link>
            <router-link to="/demos">View interface demos</router-link>
            <router-link to="/contact">Contact me</router-link>
        </div>
    </header>

    <div class="container resume-document">
        <section class="resume-block" aria-labelledby="experience-heading">
            <div class="resume-label"><p class="eyebrow">Experience</p></div>
            <div class="resume-content">
                <article class="resume-job">
                    <header><div><h2 id="experience-heading">K&R Enterprises / Mail Masters of the Southwest</h2><p>Software Developer · Albuquerque, New Mexico</p></div><time>2025–Current</time></header>
                    <ul>
                        <li>Recreated the company website and contributes to ongoing web development for printing, mailing, and mailroom services.</li>
                        <li>Develops software and workflow improvements for a commercial mail-processing environment.</li>
                        <li>Operates production equipment, connecting technical decisions with daily business requirements.</li>
                    </ul>
                    <a class="text-link" href="https://mailmasterssw.com/" target="_blank" rel="noopener noreferrer">Visit Mail Masters <span aria-hidden="true">↗</span></a>
                </article>
                <article class="resume-job">
                    <header><div><h2>HR Integrity Liquidation Services</h2><p>Webmaster / Cashier · Albuquerque, New Mexico</p></div><time>2016–Current</time></header>
                    <ul>
                        <li>Created and maintains the company website.</li>
                        <li>Supports estate-sale preparation, pricing research, customer service, transactions, and front-desk operations.</li>
                    </ul>
                    <a class="text-link" href="https://hrintegrityservices.com/" target="_blank" rel="noopener noreferrer">Visit HR Integrity <span aria-hidden="true">↗</span></a>
                </article>
                <article class="resume-job">
                    <header><div><h2>Museum Web Development Internships</h2><p>New Mexico Highlands University · Santa Fe, New Mexico</p></div><time>2020–2021</time></header>
                    <ul>
                        <li>Implemented the Yokai online exhibition in HTML, Bootstrap, and Vue from a designer’s Adobe plans, incorporating ongoing curator feedback.</li>
                        <li>Built Dressing With Purpose map submissions, descriptive pins, and an administrative approval workflow.</li>
                        <li>Created a custom WordPress theme, searchable artist registry, and artist profiles for the New Mexico History Museum portal.</li>
                    </ul>
                </article>
            </div>
        </section>

        <section class="resume-block" aria-labelledby="projects-heading">
            <div class="resume-label"><p class="eyebrow">Selected work</p></div>
            <div class="resume-content">
                <div class="resume-section-heading"><h2 id="projects-heading">Project links</h2><router-link class="text-link" to="/portfolio">Full project details <span aria-hidden="true">→</span></router-link></div>
                <div class="resume-project-list">
                    <article v-for="project in projects" :key="project.id">
                        <div><h3>{{ project.name }}</h3><p>{{ project.organization }} · {{ project.role }}</p></div>
                        <a v-if="project.href" :href="project.href" target="_blank" rel="noopener noreferrer" :aria-label="'Visit ' + project.name">Live site <span aria-hidden="true">↗</span></a>
                        <router-link v-else :to="'/portfolio#' + project.id">Details <span aria-hidden="true">→</span></router-link>
                    </article>
                </div>
            </div>
        </section>

        <section class="resume-block" aria-labelledby="education-heading">
            <div class="resume-label"><p class="eyebrow">Education</p></div>
            <div class="resume-content">
                <h2 id="education-heading" class="sr-only">Education</h2>
                <article class="resume-education" v-for="item in page.education">
                    <div><h3>{{ item.school }}</h3><p>{{ item.degree }}</p></div>
                    <div><time>{{ item.date }}</time><span>{{ item.gpa }}</span></div>
                </article>
            </div>
        </section>

        <section class="resume-block" aria-labelledby="skills-heading">
            <div class="resume-label"><p class="eyebrow">Skills</p></div>
            <div class="resume-content">
                <h2 id="skills-heading" class="sr-only">Technical skills</h2>
                <dl class="resume-skills">
                    <div v-for="item in page.stack"><dt>{{ item.label }}</dt><dd>{{ item.value }}</dd></div>
                </dl>
            </div>
        </section>

        <section class="resume-block" aria-labelledby="additional-heading">
            <div class="resume-label"><p class="eyebrow">Additional work</p></div>
            <div class="resume-content">
                <h2 id="additional-heading" class="sr-only">Research and tutoring</h2>
                <article class="resume-extra">
                    <header><h3>Programming Tutor, CNM Students</h3><time>2024–Present</time></header>
                    <p>Tutors students in Python, Java, C++, and C#.</p>
                </article>
                <article class="resume-extra">
                    <header><h3>Renewable Energy for Data Centers Research</h3><time>2024</time></header>
                    <p>Independent-study collaboration with Sandia National Laboratories focused on advanced energy controls and data-center decarbonization.</p>
                </article>
            </div>
        </section>

        <footer class="resume-footer">
            <div><p class="eyebrow">Portfolio navigation</p><h2>Projects show the work. Demos show the range.</h2></div>
            <div><router-link class="starter-button" to="/portfolio">Projects</router-link><router-link class="starter-button secondary-button" to="/demos">Demos</router-link></div>
        </footer>
    </div>
</main>`
};
