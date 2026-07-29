let Contact = {
     props:['pages'],
     data: function(){
        return {
            page: this.pages[2],
            form: {
                name: '',
                email: '',
                reason: ''
            }
        }
     },
    methods:{
        sendEmail: function (){
            let subject = encodeURIComponent('Portfolio inquiry from ' + (this.form.name || 'Website Visitor'));
            let body = encodeURIComponent(
                'Name: ' + (this.form.name || '') + '\n' +
                'Email: ' + (this.form.email || '') + '\n\n' +
                (this.form.reason || '')
            );
            window.location.href = 'mailto:' + this.page.email + '?subject=' + subject + '&body=' + body;
        }
    },
     template:  `
<div class="content-section">
    <div class="container">
        <div class="row align-items-stretch">
            <div class="col-lg-5 mb-4">
                <div class="panel-card h-100">
                    <p class="eyebrow mb-2">Get in touch</p>
                    <h1 class="page-title mb-3">Contact</h1>
                    <p class="section-intro">{{ page.intro }}</p>

                    <div class="contact-info-block">
                        <div class="contact-line">
                            <span class="contact-label">Email</span>
                            <a class="contact-link" :href="'mailto:' + page.email">{{ page.email }}</a>
                        </div>
                        <div class="contact-line">
                            <span class="contact-label">Phone</span>
                            <a class="contact-link" :href="'tel:+15053980960'">{{ page.phone }}</a>
                        </div>
                        <div class="contact-line">
                            <span class="contact-label">Location</span>
                            <span class="soft-text">{{ page.location }}</span>
                        </div>
                        <div class="contact-line">
                            <span class="contact-label">LinkedIn</span>
                            <a class="contact-link" :href="page.linkedin" target="_blank" rel="noopener noreferrer">View LinkedIn profile</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-7 mb-4">
                <div class="panel-card h-100">
                    <h3 class="mb-4">Send a message</h3>
                    <form v-on:submit.prevent="sendEmail">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="name">Name</label>
                            <input v-model="form.name" type="text" class="form-control form-control-lg custom-input" id="name" placeholder="Your name">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="email">Email address</label>
                            <input v-model="form.email" type="email" class="form-control form-control-lg custom-input" id="email" placeholder="Your email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="reason">Message</label>
                        <textarea v-model="form.reason" class="form-control custom-input" rows="6" id="reason" placeholder="Tell me a little about what you need"></textarea>
                    </div>
                    <button type="submit" class="btn btn-brand">Open Email Draft</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
`
};
