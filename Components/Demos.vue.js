let DemoPage = {
    props: ['pages'],
    data: function () {
        return {
            demos: this.pages[1].demos,
            cartCount: 0,
            profileFollowing: false
        };
    },
    template: `
<main class="demo-library">
    <header class="page-header">
        <div class="container narrow">
            <p class="eyebrow">Interface showcase</p>
            <h1>Common pages, built as coordinated demos.</h1>
            <p>These samples show how I approach familiar website layouts. They share the portfolio’s visual language and use fictional content so they remain clearly separate from real client work.</p>
        </div>
    </header>

    <nav class="demo-jump-nav" aria-label="Jump to a page demo">
        <div class="container">
            <a v-for="demo in demos" :href="'#' + demo.id">{{ demo.name }}</a>
        </div>
    </nav>

    <div class="container demo-library-list">
        <section id="home-demo" class="unified-demo" aria-labelledby="home-demo-title">
            <header class="unified-demo-heading"><div><p class="eyebrow">01 · Page demo</p><h2 id="home-demo-title">Home page</h2></div><p>{{ demos[0].summary }}</p></header>
            <div class="demo-canvas home-canvas">
                <nav><strong>NORTH / STUDIO</strong><span>About&nbsp;&nbsp;&nbsp; Services&nbsp;&nbsp;&nbsp; Work&nbsp;&nbsp;&nbsp; Contact</span><button>Start a project</button></nav>
                <div class="home-demo-hero"><div><small>DESIGN + DEVELOPMENT</small><h3>Clear digital experiences for practical ideas.</h3><p>A flexible opening section with focused writing, useful calls to action, and room for a distinctive visual.</p><div><button>Explore the work</button><button class="outline">Learn more</button></div></div><div class="abstract-art"><i></i><i></i><i></i></div></div>
                <div class="home-demo-services"><article><b>01</b><h4>Websites</h4><p>Responsive, maintainable pages.</p></article><article><b>02</b><h4>Applications</h4><p>Interfaces built around real tasks.</p></article><article><b>03</b><h4>Support</h4><p>Iteration after launch.</p></article></div>
            </div>
        </section>

        <section id="about-demo" class="unified-demo" aria-labelledby="about-demo-title">
            <header class="unified-demo-heading"><div><p class="eyebrow">02 · Page demo</p><h2 id="about-demo-title">About page</h2></div><p>{{ demos[1].summary }}</p></header>
            <div class="demo-canvas about-canvas">
                <div class="about-intro"><div><small>OUR STORY</small><h3>Built around thoughtful work and lasting relationships.</h3></div><p>A strong About page connects a company’s history with what customers can expect today. This structure creates room for a concise story without becoming a wall of text.</p></div>
                <div class="about-grid"><div class="about-photo"><span>Team or workspace image</span></div><div class="values"><article><b>01</b><div><h4>Listen first</h4><p>Understand the people, problem, and context before proposing a solution.</p></div></article><article><b>02</b><div><h4>Build clearly</h4><p>Make deliberate choices and communicate them in plain language.</p></div></article><article><b>03</b><div><h4>Keep improving</h4><p>Use feedback and real use to guide the next iteration.</p></div></article></div></div>
            </div>
        </section>

        <section id="contact-demo" class="unified-demo" aria-labelledby="contact-demo-title">
            <header class="unified-demo-heading"><div><p class="eyebrow">03 · Page demo</p><h2 id="contact-demo-title">Contact page</h2></div><p>{{ demos[2].summary }}</p></header>
            <div class="demo-canvas contact-canvas">
                <div><small>GET IN TOUCH</small><h3>Tell us what you’re working on.</h3><p>Use a short introduction, direct contact options, hours, or a service area so visitors know what happens next.</p><dl><div><dt>Email</dt><dd>hello@example.com</dd></div><div><dt>Phone</dt><dd>(505) 555-0148</dd></div><div><dt>Location</dt><dd>Albuquerque, New Mexico</dd></div></dl></div>
                <form @submit.prevent><label>Name<input type="text" autocomplete="name" placeholder="Your name"></label><label>Email<input type="email" autocomplete="email" placeholder="you@example.com"></label><label>Topic<select><option>Choose a topic</option><option>New website</option><option>Website update</option><option>Application interface</option></select></label><label>Message<textarea rows="4" placeholder="A few details about your project"></textarea></label><button type="submit">Send inquiry</button></form>
            </div>
        </section>

        <section id="store-demo" class="unified-demo" aria-labelledby="store-demo-title">
            <header class="unified-demo-heading"><div><p class="eyebrow">04 · Page demo</p><h2 id="store-demo-title">Store page</h2></div><p>{{ demos[3].summary }}</p></header>
            <div class="demo-canvas store-canvas">
                <div class="store-demo-bar"><div><button class="active">All</button><button>Workspace</button><button>Everyday</button></div><span aria-live="polite">Cart · {{ cartCount }}</span></div>
                <div class="unified-products"><article v-for="(product, index) in [{n:'Field notebook',p:'$18'},{n:'Desk organizer',p:'$42'},{n:'Travel bottle',p:'$28'}]"><div :class="'unified-product-art art-' + index"></div><div><h4>{{ product.n }}</h4><span>{{ product.p }}</span></div><button @click="cartCount++">Add to cart</button></article></div>
            </div>
        </section>

        <section id="gallery-demo" class="unified-demo" aria-labelledby="gallery-demo-title">
            <header class="unified-demo-heading"><div><p class="eyebrow">05 · Page demo</p><h2 id="gallery-demo-title">Gallery page</h2></div><p>{{ demos[4].summary }}</p></header>
            <div class="demo-canvas gallery-canvas">
                <div class="gallery-filter"><button class="active">All work</button><button>Web</button><button>Brand</button><button>Photography</button></div>
                <div class="gallery-grid"><figure class="wide"><div></div><figcaption>Featured collection <span>Web</span></figcaption></figure><figure><div></div><figcaption>Studio detail <span>Photography</span></figcaption></figure><figure><div></div><figcaption>Identity system <span>Brand</span></figcaption></figure><figure class="wide"><div></div><figcaption>Editorial layout <span>Web</span></figcaption></figure></div>
            </div>
        </section>

        <section id="profile-demo" class="unified-demo" aria-labelledby="profile-demo-title">
            <header class="unified-demo-heading"><div><p class="eyebrow">06 · Page demo</p><h2 id="profile-demo-title">Profile page</h2></div><p>{{ demos[5].summary }}</p></header>
            <div class="demo-canvas profile-canvas">
                <div class="profile-banner"></div><div class="unified-profile-head"><div class="unified-avatar">JS</div><div><h3>Jordan Smith</h3><p>Product developer · Albuquerque, NM</p></div><button @click="profileFollowing=!profileFollowing">{{ profileFollowing ? 'Following' : 'Follow' }}</button></div>
                <div class="unified-profile-grid"><article><h4>About</h4><p>I build useful digital tools and enjoy turning complex requirements into clear interfaces.</p><div class="profile-tags"><span>Vue</span><span>JavaScript</span><span>Accessibility</span></div></article><article><h4>Recent activity</h4><ul><li>Published a new project case study</li><li>Updated the design system</li><li>Completed an accessibility review</li></ul></article><aside><span>Projects<strong>18</strong></span><span>Followers<strong>246</strong></span><span>Following<strong>89</strong></span></aside></div>
            </div>
        </section>

        <section id="political-demo" class="unified-demo" aria-labelledby="political-demo-title">
            <header class="unified-demo-heading"><div><p class="eyebrow">07 · Page demo</p><h2 id="political-demo-title">Political campaign page</h2></div><p>{{ demos[6].summary }}</p></header>
            <div class="demo-canvas political-canvas">
                <nav class="campaign-nav"><strong>ALEX RIVERA <span>FOR CITY COUNCIL</span></strong><div>Meet Alex&nbsp;&nbsp;&nbsp; Priorities&nbsp;&nbsp;&nbsp; Events</div><button>Get involved</button></nav>
                <div class="campaign-hero"><div><small>PEOPLE FIRST · NEIGHBORHOODS FORWARD</small><h3>Practical leadership for a stronger Albuquerque.</h3><p>A campaign homepage can introduce the candidate, establish priorities, and give supporters an immediate way to volunteer, attend, or contribute.</p><div><button>Join the campaign</button><button class="outline">Meet Alex</button></div></div><div class="candidate-art"><span>Candidate photo</span></div></div>
                <section class="campaign-priorities"><small>THE PRIORITIES</small><h3>A clear plan for the issues that matter locally.</h3><div><article><b>01</b><h4>Safe neighborhoods</h4><p>Community-centered public safety and responsive city services.</p></article><article><b>02</b><h4>Local opportunity</h4><p>Support for small businesses, workers, and responsible growth.</p></article><article><b>03</b><h4>Reliable infrastructure</h4><p>Practical investment in roads, water, transit, and public spaces.</p></article></div></section>
                <section class="campaign-action"><div><small>UPCOMING EVENT</small><h3>Community listening session</h3><p>Thursday, August 13 · 6:00 PM<br>Example Community Center</p></div><form @submit.prevent><label>Email address<input type="email" autocomplete="email" placeholder="you@example.com"></label><label>ZIP code<input type="text" inputmode="numeric" autocomplete="postal-code" placeholder="87102"></label><button type="submit">Sign up for updates</button></form></section>
                <footer class="campaign-footer"><strong>ALEX RIVERA FOR CITY COUNCIL</strong><span>Fictional campaign demonstration. Not affiliated with a real candidate.</span><span class="paid-for">Paid for by Example Campaign Committee</span></footer>
            </div>
        </section>
    </div>
</main>`
};
