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
            {{ $t('Dapatkan MBA! 100% online, 100% di tangan anda!') }}
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
            {{ $t('Muat Turun') }} <br class="hidden sm:block" />
            {{ $t('Panduan Program') }}
          </h2>
          <p class="paragraph">Dapatkan maklumat lanjut program, termasuk:</p>

          <ul class="grid grid-cols-1 gap-1 md:grid-cols-2">
            <LandingListItem :title="$t('Yuran')" />
            <LandingListItem :title="$t('Hasil Pembelajaran')" />
            <LandingListItem :title="$t('Syarat Kemasukan')" />
          </ul>
        </div>
        <div data-aos="zoom-in-left" class="col-span-12 mt-4 space-y-6 lg:px-4 lg:col-span-6 xl:mt-20">
          <LandingForm v-if="false" />
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfIJ-s_uq0h56WlC-we4nSfZ-0lnj0fy2lftSv7hBadyJQ9Ew/viewform?embedded=false"
            width="100%"
            height="810"
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
          <div id="course-overview" class="space-y-8 pt-28 lg:pt-32 sm:space-y-6">
            <h2 data-aos="fade-up" class="text-4xl font-semibold text-header-gradient">
              {{ $t('Ringkasan Program') }}
            </h2>
            <div class="space-y-6">
              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                {{
                  $t(
                    'Kejayaan di tangan anda, dengan program MBA dalam talian yang fleksibel sepenuhnya. Direka untuk profesional yang bekerja, kursus ini membolehkan anda mengimbangi pengajian anda dengan kerjaya dan kehidupan peribadi anda dengan mudah.'
                  )
                }}
              </p>
              <ol class="ml-6 space-y-4 list-decimal sm:space-y-2">
                <li data-aos="fade-up" class="text-sm paragraph xl:text-base">
                  {{
                    $t(
                      '1 Bulan, 1 Modul: Fokus secara intensif pada satu modul setiap bulan, memudahkan pengurusan masa anda dan penyerapan bahan secara menyeluruh.'
                    )
                  }}
                </li>
                <li data-aos="fade-up" class="text-sm paragraph xl:text-base">
                  {{ $t('Intake Setiap Bulan: Mulakan perjalanan MBA anda bila-bila masa') }}
                </li>
                <li data-aos="fade-up" class="text-sm paragraph xl:text-base">
                  {{
                    $t(
                      'Bayaran Per Modul: Nikmati fleksibiliti membayar satu modul pada satu masa dengan harga yang kompetitif.'
                    )
                  }}
                </li>
              </ol>
            </div>
          </div>

          <!-- Key Facts -->
          <div id="key-facts" class="space-y-8 pt-28 lg:pt-32 sm:space-y-6">
            <h2 data-aos="fade-up" class="text-4xl font-semibold text-header-gradient">
              {{ $t('Fakta Utama') }}
            </h2>
            <div data-aos="fade-up" class="space-y-6">
              <LandingKeyFacts :datasets="keyFactsAll" class="grid-cols-1 md:grid-cols-3" />
            </div>
          </div>

          <!-- Entry Requirements -->
          <div id="entry-requirements" class="space-y-8 pt-28 lg:pt-32 sm:space-y-6">
            <h2 data-aos="fade-up" class="text-4xl font-semibold text-header-gradient">{{ $t('Syarat kemasukan') }}</h2>
            <div class="space-y-6">
              <ol class="ml-6 space-y-4 list-decimal sm:space-y-2">
                <li data-aos="fade-up" class="text-sm paragraph xl:text-base">
                  {{ $t('Kemasukan Terus: Terbuka untuk graduan Degree/ Ijazah Sarjana Muda') }}
                </li>
                <li data-aos="fade-up" class="text-sm paragraph xl:text-base">
                  {{
                    $t(
                      'Kemasukan APEL: Terbuka untuk graduan STPM atau Diploma, berumur 30 tahun ke atas, dengan 5 tahun pengalaman kerja'
                    )
                  }}
                </li>
                <li data-aos="fade-up" class="text-sm paragraph xl:text-base">
                  {{ $t('Kemasukan Micro Credentials: Tiada syarat kelayakan masuk. Terbuka untuk semua.') }}
                </li>
              </ol>
            </div>
          </div>

          <!-- Lecturer -->
          <div id="lecturer" class="space-y-8 pt-28 lg:pt-32 sm:space-y-6">
            <h2 data-aos="fade-up" class="text-4xl font-semibold text-header-gradient">{{ $t('Pensyarah') }}</h2>
            <div class="space-y-6">
              <p data-aos="fade-up" class="text-sm paragraph xl:text-base">
                <b>Dr. Syed Helmy bin Syed Abu Bakar, PhD</b>
              </p>

              <ul class="space-y-8 sm:space-y-4">
                <LandingListItem data-aos="fade-up" :title="$t('Pengalaman 28 tahun dalam kepimpinan pendidikan')" />
                <LandingListItem data-aos="fade-up" :title="$t('Dari pensyarah hingga Naib Canselor')" />
                <LandingListItem
                  data-aos="fade-up"
                  :title="$t('Pakar dalam pengambilan pelajar, kecemerlangan akademik, dan pembangunan institusi')"
                />
                <LandingListItem
                  data-aos="fade-up"
                  :title="$t('Ahli Lembaga Penasihat untuk Education Malaysia Global Service (EMGS')"
                />
                <LandingListItem
                  data-aos="fade-up"
                  :title="$t('Bersemangat dalam pendidikan berkualiti dan pertumbuhan mampan')"
                />
              </ul>
            </div>
          </div>

          <!-- FAQs -->
          <div id="faqs" data-aos="fade-up" data-aos-easing="linear" class="col-span-12 pt-28 lg:pt-32">
            <h2 class="mb-10 text-3xl font-semibold sm:text-4xl sm:mb-6">{{ $t('Soalan Lazim') }}</h2>

            <ul class="shadow-box">
              <BaseAccordion
                v-for="(accordion, index) in faqs"
                :key="index"
                data-aos="fade-up"
                :accordion="accordion"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA: HIDDEN -->
    <section v-if="false" class="w-full my-24">
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
              {{ $t('Muat Turun') }} {{ $t('Panduan Program') }}
            </BaseButton>
            <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
            >
              <a href="tel:+60193792803" class="flex items-center">
                <img :src="require('~/assets/img/icons/phone.svg')" class="w-6 h-6 mr-2 rounded-lg" />
                {{ $t('Dapatkan info') }}
              </a>
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Back to top -->
    <div class="flex justify-center w-full my-10">
      <BaseButton
        v-smooth-scroll
        class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
        href="#download-programme-guide"
      >
        {{ $t('Muat Turun') }} {{ $t('Panduan Program') }}
      </BaseButton>
      <!-- <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#top"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>{{ $t('Kembali ke atas') }}</span>
        <ArrowUpIcon :size="20" />
      </a> -->
    </div>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  computed: {
    keyFactsPartial() {
      return [
        {
          text: this.$t('Mod'),
          label: this.$t('Online'),
          img: 'monitor.svg',
        },
        {
          text: this.$t('Tahap'),
          label: this.$t('Postgraduate'),
          img: 'institution.svg',
        },
        {
          text: this.$t('Jenis Program'),
          label: this.$t("Master's"),
          img: 'graduation-cap.svg',
        },
        {
          text: this.$t('Fakta Utama Program'),
          label: `<a v-smooth-scroll href="#key-facts" class="underline text-gradient">${this.$t('Lihat semua')}</a>`,
          img: 'institution.svg',
        },
      ]
    },
    keyFactsAll() {
      return [
        {
          text: this.$t('Mod'),
          label: this.$t('Online'),
          img: 'monitor.svg',
        },
        {
          text: this.$t('Tahap'),
          label: this.$t('Postgraduate'),
          img: 'institution.svg',
        },
        {
          text: this.$t('Jenis Program'),
          label: this.$t("Master's"),
          img: 'graduation-cap.svg',
        },
        {
          text: this.$t('Tempoh'),
          label: this.$t('12 bulan'),
          img: 'calendar.svg',
        },
        {
          text: this.$t('Jumlah Modul'),
          label: '12',
          img: 'book.svg',
        },
        {
          text: this.$t('Yuran Per Modul'),
          label: 'RM 1,250',
          img: 'dollar.svg',
        },
        {
          text: this.$t('Intake'),
          label: this.$t('Sabtu pertama setiap bulan'),
          img: 'calendar-plus.svg',
        },
      ]
    },
    faqs() {
      return [
        {
          title: this.$t('Adakah program MBA sepenuhnya dalam talian (online)?'),
          description: this.$t(
            'Ya, program MBA kami adalah sepenuhnya dalam talian, membolehkan anda belajar dari mana-mana di dunia pada masa yang sesuai untuk anda.'
          ),
        },
        {
          title: this.$t('Berapa tempoh program MBA?'),
          description: this.$t(
            'Biasanya, program MBA kami boleh diselesaikan dalam tempoh satu tahun dengan pengajian fleksibel, direka khas untuk profesional yang bekerja.'
          ),
        },
        {
          title: this.$t('Apakah syarat kemasukan yang diperlukan?'),
          description: `${this.$t(
            'Untuk memohon, anda perlu memiliki ijazah sarjana atau yang setara (Direct Entry), atau individu berumur 30 tahun ke atas, memiliki STPM atau Diploma, dan pengalaman kerja selama 5 tahun (APEL Entry). Tiada syarat kemasukan untuk (Micro Credentials Entry), terbuka kepada semua! Butir-butir spesifik boleh didapati dalam panduan Program kami.'
          )} <a v-smooth-scroll class='cursor-pointer text-gradient' href='#download-programme-guide'>${this.$t(
            'Muat turun di sini'
          )}</a>`,
        },
        {
          title: this.$t('Bolehkah saya bekerja sambil belajar MBA?'),
          description: this.$t(
            'Tentu saja! Jadual yang fleksibel kami direka untuk profesional yang sibuk. Ramai pelajar kami terus bekerja sepenuh masa semasa menyelesaikan pengajian MBA mereka.'
          ),
        },
        {
          title: this.$t('Berapakah yuran pengajian dan pilihan pembayaran yang tersedia?'),
          description: this.$t(
            'Yuran pengajian kami kompetitif dan direka untuk memenuhi bajet anda. (Bayar per modul). Kami menawarkan pelan pembayaran yang fleksibel untuk memudahkan pembiayaan pendidikan anda. Pengeluaran EPF/KWSP juga tersedia.'
          ),
        },
      ]
    },
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
