<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24">
      <BaseSection>
        <div class="col-span-12 mt-12 space-y-4 text-center lg:px-6 lg:col-span-8 xl:mt-10 sm:space-y-6 sm:text-left">
          <span
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1000"
            class="text-base font-bold text-gradient"
            >Postgraduate Study <br class="md:hidden" />
            <span class="ml-0 font-normal md:ml-6">100% Online</span></span
          >
          <h1
            data-aos="zoom-in-right"
            data-aos-once="true"
            data-aos-duration="1000"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight sm:pr-8 xl:pr-10"
          >
            Master of
            <br /><span class="text-header-gradient">Business Administration</span>
          </h1>
          <p data-aos="zoom-in" data-aos-once="true" data-aos-delay="300" class="hidden paragraph sm:block">
            Advance in your career with a 100% online, self-paced MBA.
          </p>
        </div>
        <div class="hidden col-span-12 lg:block lg:col-span-4">
          <div class="w-full">
            <img
              data-aos="zoom-in-left"
              data-aos-once="true"
              data-aos-duration="1000"
              :src="require('~/assets/img/online-course.png')"
              class="-mt-4"
              alt=""
            />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-1.png')"
          class="absolute hidden w-6 sm:block bottom-12 xl:bottom-16 left-4 xl:left-0"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-2.png')"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-3.png')"
          class="absolute bottom-0 hidden w-6 sm:block right-24"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/star.png')"
          class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
        />
      </BaseSection>
    </section>

    <!-- Key Facts (Partial) -->
    <section
      data-aos="flip-down"
      data-aos-delay="300"
      class="max-w-screen-xl mx-2 sm:mx-auto p-4 sm:p-6 py-6 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
    >
      <LandingKeyFacts :datasets="keyFactsPartial" class="grid-cols-1 md:grid-cols-4" />
    </section>

    <!-- Download a Programme Guide -->
    <section id="download-programme-guide" class="w-full py-24">
      <BaseSection>
        <div data-aos="zoom-in-right" class="col-span-12 px-4 mt-4 space-y-6 lg:col-span-6 xl:mt-20">
          <h2 class="text-4xl font-semibold sm:pr-8 xl:pr-12">
            Download a <br class="hidden sm:block" />
            Programme Guide
          </h2>
          <p class="paragraph">Explore more details of the programme here, including:</p>

          <ul class="grid grid-cols-1 gap-1 md:grid-cols-2">
            <LandingListItem title="Course Structure" />
            <LandingListItem title="Fees" />
            <LandingListItem title="Learning Outcomes" />
            <LandingListItem title="Entry Requirements" />
          </ul>

          <div class="text-xs text-justify text-gray-500">
            *By submitting this form you acknowledge HELP University will collect your personal information (including
            your name and email address) to respond to your enquiry. To learn more, refer to our
            <a href="/privacy policy" class="underline text-gradient">privacy policy.</a>
          </div>
        </div>
        <div data-aos="zoom-in-left" class="col-span-12 mt-4 space-y-6 lg:px-4 lg:col-span-6 xl:mt-20">
          <LandingForm v-if="false" />
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeVgAFWkIIOji9LCjI1l-BJL4WesM8OU8p-6T3uWr4-Xkfl1g/viewform?embedded=true"
            width="100%"
            height="600"
            frameborder="1"
            marginheight="0"
            marginwidth="0"
            style="margin-top: 0"
            >Loading…</iframe
          >
        </div>
      </BaseSection>
    </section>

    <!-- Course Section -->
    <section class="relative max-w-full my-20 overflow-hidden shadow md:py-16 bg-course-section sm:mx-4 rounded-2xl">
      <div class="relative grid max-w-screen-xl grid-cols-12 px-4 mx-auto sm:px-2 gap-x-6">
        <div class="max-w-screen-md col-span-12 px-4 mx-auto mt-8 sm:px-6">
          <!-- Course Overview -->
          <div id="course-overview" class="pt-28 lg:pt-32 md:space-y-8 sm:space-y-6">
            <h2 data-aos="fade-up" class="text-4xl font-semibold text-header-gradient">Course Overview</h2>
            <div class="space-y-6">
              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                Empower your journey towards your career and personal goals with Master of Business Administration
                Online – a fully accredited, globally accessible programme tailored for professionals.
              </p>
              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                The comprehensive syllabus is designed to cultivate competence, confidence, and career competitiveness.
                Covering the fundamentals of management, economics, analytics, and more, it will be taught by industry
                experts and the accomplished HELP University. By the end of the programme, successful graduates will be
                well-equipped to lead in even the most rapidly-changing and unpredictable of business environments.
              </p>
              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                Mirroring the conventional MBA, it has a 12-module structure for students to complete the course in 2
                years, with maximum candidature of 3 years.
              </p>
              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                Is time your biggest enemy? Not when our MBA is 100% online with a self-paced learning mode. Students
                can access study materials remotely anytime, ​anywhere and take full control of their time with zero
                scheduled classes.
              </p>
            </div>
          </div>

          <!-- Key Facts -->
          <div id="key-facts" class="space-y-8 pt-28 lg:pt-32 sm:space-y-6">
            <h2 data-aos="fade-up" class="text-4xl font-semibold text-header-gradient">Key Facts</h2>
            <div data-aos="fade-up" class="space-y-6">
              <LandingKeyFacts :datasets="keyFactsAll" class="grid-cols-1 md:grid-cols-3" />
            </div>
          </div>

          <!-- Course Structure -->
          <div id="course-structure" class="space-y-8 pt-28 lg:pt-32 sm:space-y-6">
            <h2 data-aos="fade-up" class="text-4xl font-semibold text-header-gradient">Course Structure</h2>
            <div class="space-y-6">
              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                A comprehensive 12-module programme that covers study areas such as business management, research,
                analytics, leadership, and more.
              </p>
              <!-- TODO: -->
              TODO:
            </div>
          </div>

          <!-- TODO: ??? -->

          <!-- Entry Requirements -->
          <div id="entry-requirements" class="space-y-8 pt-28 lg:pt-32 sm:space-y-6">
            <h2 data-aos="fade-up" class="text-4xl font-semibold text-header-gradient">Entry Requirements</h2>
            <div class="space-y-6">
              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                Explore straightforward entry requirements that make joining our MBA Online programme seamless.
              </p>

              <ul class="ml-6 space-y-4 sm:space-y-2">
                <LandingListItem
                  data-aos="fade-up"
                  title="A Bachelor's degree (MQF Level 6) in related fields with a minimum CGPA of 2.50, OR"
                />
                <LandingListItem
                  data-aos="fade-up"
                  title="A Bachelor's degree in related fields with a minimum CGPA of 2.00, subject to rigorous internal assessment, OR"
                />
                <LandingListItem
                  data-aos="fade-up"
                  title="A Bachelor's degree in non-related fields with a minimum CGPA of 2.00 and with relevant working experience, subject to rigorous internal assessment, OR"
                />
              </ul>

              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                <b>
                  For non-related fields bachelor's degree holders (min. CGPA of 2.00) without relevant working
                  experience:
                </b>
              </p>

              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                Apply for our <b>complimentary 2-week prerequisite study</b> of business and management, and start your
                <b>MBA Online</b> in no time! Speak to our Education Counsellors to find out
                <a href="#" class="underline text-gradient">more (todo: link to whatsapp)</a>.
              </p>

              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                <b> For Malaysian non-degree holders with at least a Diploma or STPM certificate: </b>
              </p>

              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                Obtain the MQA Accreditation of Prior Experiential Learning, APEL.A certificate for approved course
                admission.
              </p>

              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                <b> For international applicants: </b>
              </p>

              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                Require English proficiency in terms of MUET Band 4, or CEFR (MidB2), IELTS 6.0, or other language
                proficiency equivalencies.
              </p>
            </div>
          </div>

          <!-- Intake Dates -->
          <div id="intake-dates" class="space-y-8 pt-28 lg:pt-32 sm:space-y-6">
            <h2 data-aos="fade-up" class="text-4xl font-semibold text-header-gradient">Intake Dates</h2>
            <div class="space-y-6">
              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                Our 100% online, self-paced MBA Online champions flexible learning with various entry points throughout
                the year, enabling you to embark on your journey based on your schedule.
              </p>

              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">There are 5 intakes per year:</p>

              <ul class="ml-6 space-y-4 sm:space-y-2">
                <LandingListItem data-aos="fade-up" title="January" />
                <LandingListItem data-aos="fade-up" title="February" />
                <LandingListItem data-aos="fade-up" title="March" />
                <LandingListItem data-aos="fade-up" title="April" />
                <LandingListItem data-aos="fade-up" title="May" />
              </ul>
            </div>
          </div>

          <!-- Lecturer -->
          <div id="lecturer" class="space-y-8 pt-28 lg:pt-32 sm:space-y-6">
            <h2 data-aos="fade-up" class="text-4xl font-semibold text-header-gradient">Lecturer</h2>
            <div class="space-y-6">
              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                <b>Faizal Jusri</b>
              </p>

              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                <em>
                  PhD in Business (International University of Malaya-Wales), MBA (University of Southern Queensland)
                </em>
              </p>

              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                With two decades of experience, Faizal Jusri has established a robust foundation in training and
                successfully led diverse professional teams in the realm of learning design and delivery. His profound
                expertise in marketing benefits the upcoming generation of marketing professionals.
              </p>
            </div>
          </div>

          <!-- FAQs -->
          <div id="faqs" data-aos="fade-up" data-aos-easing="linear" class="col-span-12 pt-28 lg:pt-32">
            <h2 class="mb-10 text-3xl font-semibold sm:text-4xl sm:mb-6">Frequently asked questions</h2>

            <ul class="shadow-box">
              <BaseAccordion v-for="(accordion, index) in faqs" :key="index" :accordion="accordion" />
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="w-full my-24">
      <div class="relative grid max-w-screen-xl grid-cols-12 px-8 mx-auto gap-x-6">
        <div data-aos="zoom-in-right" data-aos-easing="linear" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/online-lessons.png')" class="w-full" alt="" />
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="linear"
          class="col-span-12 mt-8 space-y-8 lg:col-span-6 sm:space-y-6 xl:px-8"
        >
          <h2 class="text-4xl font-semibold">Ready to Start Learning?</h2>
          <p class="text-sm paragraph xl:text-base">Take the first step towards your future as a business leader.</p>
          <ul class="space-y-8 sm:space-y-4">
            <LandingListItem title="Designed for business professionals " />
            <LandingListItem title="100% online, self-paced learning" />
            <LandingListItem title="Value-driven, quality education" />
          </ul>

          <div class="flex flex-col mt-2 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <BaseButton
              v-smooth-scroll
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
              href="#download-programme-guide"
            >
              Download a Programme Guide
            </BaseButton>
            <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
            >
              <a href="tel:+60193792803" class="flex items-center">
                <img :src="require('~/assets/img/icons/phone.svg')" class="w-6 h-6 mr-2 rounded-lg" />
                Schedule a Call
              </a>
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <div class="flex justify-center w-full my-10">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#top"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      keyFactsPartial: [
        {
          text: 'Delivery',
          label: 'Online',
          img: 'monitor.svg',
        },
        {
          text: 'Study Level',
          label: 'Postgraduate',
          img: 'institution.svg',
        },
        {
          text: 'Programme Type',
          label: "Master's",
          img: 'graduation-cap.svg',
        },
        {
          text: 'Programme Key Facts',
          label: '<a v-smooth-scroll href="#key-facts" class="underline text-gradient">View all</a>',
          img: 'institution.svg',
        },
      ],
      keyFactsAll: [
        {
          text: 'Delivery',
          label: 'Online',
          img: 'monitor.svg',
        },
        {
          text: 'Study Level',
          label: 'Postgraduate',
          img: 'institution.svg',
        },
        {
          text: 'Programme Type',
          label: "Master's",
          img: 'graduation-cap.svg',
        },
        {
          text: 'Duration',
          label: '2 years (Part time)',
          img: 'calendar.svg',
        },
        {
          text: 'Modules',
          label: '12',
          img: 'book.svg',
        },
        {
          text: 'Price Per Module',
          label: 'MYR 2,250',
          img: 'dollar.svg',
        },
        {
          text: 'Intake',
          label: '5th August, 2024 <br>23rd September, 2024',
          img: 'calendar-plus.svg',
        },
      ],
      faqs: [
        {
          title: 'Is getting an MBA worth it? ',
          description:
            "Yes. An MBA can enhance your leadership skills, earning potential, and the business opportunities that come your way. It's an investment in your future that equips you with valuable knowledge and connections to keep up with the rapidly changing world of business.",
        },
        {
          title: 'What can I learn with an MBA?',
          description:
            'You will gain knowledge in the various business fundamentals, from management to research skills to analytics to ethics. By the end of the programme, you should have a new business network, greater confidence in your leadership skills, and a holistic understanding of modern business practices.',
        },
        {
          title: "Is it okay if I don't have a diploma/bachelor's degree?",
          description:
            "For Malaysian non-degree holders with at least a Diploma or STPM certificate, you will need to obtain the MQA Accreditation of Prior Experiential Learning, APEL.A certificate for approved course admission. <br><br>Speak to our Education Counsellors to learn more about the entry requirements <a class='cursor-pointer text-gradient' target='_blank' href='#'>here (todo: link to whatsapp)</a>",
        },
      ],
    }
  },
}
</script>
<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-course-section {
  background: url('../assets/img/bg-course-section.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
