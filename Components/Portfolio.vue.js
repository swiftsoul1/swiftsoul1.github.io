let Portfolio = {
    props: ['pages'],
    data: function () { return { page: this.pages[1] }; },
    mounted: function () { this.scrollToHash(); },
    updated: function () { this.scrollToHash(); },
    methods: {
        scrollToHash: function () {
            let hash = window.location.hash.split('#')[2];
            if (hash) this.$nextTick(function () {
                let target = document.getElementById(hash);
                if (target) target.scrollIntoView();
            });
        }
    },
    template: `
<main>
    <header class="page-header">
        <div class="container narrow">
            <p class="eyebrow">Project archive</p>
            <h1>Work that shows what I can build.</h1>
            <p>{{ page.intro }}</p>
        </div>
    </header>

    <section class="section project-list-section" aria-labelledby="real-work-title">
        <div class="container">
            <h2 id="real-work-title" class="visually-anchored">Real-world work</h2>
            <article class="project-row" v-for="item in page.items" :id="item.id" :key="item.id">
                <div class="project-thumbnail" :class="{ placeholder: !item.featured }">
                    <img v-if="item.featured" :src="item.featured" :alt="'Screenshot of ' + item.name">
                    <div v-else class="project-monogram" aria-hidden="true">{{ item.name.charAt(0) }}</div>
                </div>
                <div class="project-details">
                    <p class="project-org">{{ item.organization }}</p>
                    <h3>{{ item.name }}</h3>
                    <p class="project-role">{{ item.role }}</p>
                    <p>{{ item.summary }}</p>
                    <ul class="tag-list" :aria-label="'Technologies and focus areas for ' + item.name">
                        <li v-for="tag in item.tags">{{ tag }}</li>
                    </ul>
                    <a v-if="item.href" class="text-link" :href="item.href" target="_blank" rel="noopener noreferrer">{{ item.linkText }} <span aria-hidden="true">↗</span></a>
                    <span v-else class="link-note">Screenshots and public link coming soon</span>
                </div>
            </article>
        </div>
    </section>

    <section class="section demos-section" aria-labelledby="demos-title">
        <div class="container">
            <div class="section-heading">
                <div><p class="eyebrow">Capability studies</p><h2 id="demos-title">Working interface demos</h2></div>
            </div>
            <p class="section-lead">A single coordinated showcase demonstrates common website pages without presenting the concepts as client work.</p>
            <router-link class="demo-index-card" to="/demos">
                <div class="demo-index-preview" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>
                <div><p class="project-type">Six coordinated examples</p><h3>Website page demos</h3><p>Home, About, Contact, Store, Gallery, and Profile—all styled as part of this portfolio.</p><span class="text-link">View the demos <span aria-hidden="true">→</span></span></div>
            </router-link>
        </div>
    </section>
</main>`
};
