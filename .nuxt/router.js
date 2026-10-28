import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3a0530c7 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _5d0c1248 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _04db90ac = () => interopDefault(import('..\\pages\\admission\\index.vue' /* webpackChunkName: "pages/admission/index" */))
const _2953f644 = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages/careers" */))
const _3c97260c = () => interopDefault(import('..\\pages\\company.vue' /* webpackChunkName: "pages/company" */))
const _280ee51a = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _c0d17648 = () => interopDefault(import('..\\pages\\course.vue' /* webpackChunkName: "pages/course" */))
const _341458b6 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _824fc236 = () => interopDefault(import('..\\pages\\faq-covid19.vue' /* webpackChunkName: "pages/faq-covid19" */))
const _446c8005 = () => interopDefault(import('..\\pages\\feature.vue' /* webpackChunkName: "pages/feature" */))
const _401784a0 = () => interopDefault(import('..\\pages\\firstday-at-mli.vue' /* webpackChunkName: "pages/firstday-at-mli" */))
const _6e01f62e = () => interopDefault(import('..\\pages\\freetrial\\index.vue' /* webpackChunkName: "pages/freetrial/index" */))
const _93583e0e = () => interopDefault(import('..\\pages\\going-to-college.vue' /* webpackChunkName: "pages/going-to-college" */))
const _0552b12a = () => interopDefault(import('..\\pages\\havevisa.vue' /* webpackChunkName: "pages/havevisa" */))
const _bfe2ede4 = () => interopDefault(import('..\\pages\\hollywood.vue' /* webpackChunkName: "pages/hollywood" */))
const _ed9da440 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _69d36470 = () => interopDefault(import('..\\pages\\how-to-apply\\index.vue' /* webpackChunkName: "pages/how-to-apply/index" */))
const _e2bd8934 = () => interopDefault(import('..\\pages\\how-to-apply-for-a-student-visa.vue' /* webpackChunkName: "pages/how-to-apply-for-a-student-visa" */))
const _20df43af = () => interopDefault(import('..\\pages\\image-gallery.vue' /* webpackChunkName: "pages/image-gallery" */))
const _02b609da = () => interopDefault(import('..\\pages\\material\\index.vue' /* webpackChunkName: "pages/material/index" */))
const _74af43c6 = () => interopDefault(import('..\\pages\\mli-quarantine-policy.vue' /* webpackChunkName: "pages/mli-quarantine-policy" */))
const _bcd5fc40 = () => interopDefault(import('..\\pages\\official-toefl-test.vue' /* webpackChunkName: "pages/official-toefl-test" */))
const _bac172d0 = () => interopDefault(import('..\\pages\\price.vue' /* webpackChunkName: "pages/price" */))
const _b528e018 = () => interopDefault(import('..\\pages\\price-auto.vue' /* webpackChunkName: "pages/price-auto" */))
const _612697e3 = () => interopDefault(import('..\\pages\\promo_contact\\index.vue' /* webpackChunkName: "pages/promo_contact/index" */))
const _33494d6a = () => interopDefault(import('..\\pages\\promo_material\\index.vue' /* webpackChunkName: "pages/promo_material/index" */))
const _192b655a = () => interopDefault(import('..\\pages\\safety-covid19.vue' /* webpackChunkName: "pages/safety-covid19" */))
const _1a943b06 = () => interopDefault(import('..\\pages\\school-calendar.vue' /* webpackChunkName: "pages/school-calendar" */))
const _4d88d05c = () => interopDefault(import('..\\pages\\school-magazine.vue' /* webpackChunkName: "pages/school-magazine" */))
const _16061b4c = () => interopDefault(import('..\\pages\\stay.vue' /* webpackChunkName: "pages/stay" */))
const _00098452 = () => interopDefault(import('..\\pages\\teachers.vue' /* webpackChunkName: "pages/teachers" */))
const _1b2099ae = () => interopDefault(import('..\\pages\\testimonial.vue' /* webpackChunkName: "pages/testimonial" */))
const _4c9e3d35 = () => interopDefault(import('..\\pages\\testimonials.vue' /* webpackChunkName: "pages/testimonials" */))
const _bcc0b724 = () => interopDefault(import('..\\pages\\visaholder.vue' /* webpackChunkName: "pages/visaholder" */))
const _3e11cedd = () => interopDefault(import('..\\pages\\westwood.vue' /* webpackChunkName: "pages/westwood" */))
const _6265e514 = () => interopDefault(import('..\\pages\\admission\\fail.vue' /* webpackChunkName: "pages/admission/fail" */))
const _4c332fa1 = () => interopDefault(import('..\\pages\\admission\\thanks.vue' /* webpackChunkName: "pages/admission/thanks" */))
const _2a9792f8 = () => interopDefault(import('..\\pages\\contact\\thanks.vue' /* webpackChunkName: "pages/contact/thanks" */))
const _233feb7c = () => interopDefault(import('..\\pages\\freetrial\\thanks.vue' /* webpackChunkName: "pages/freetrial/thanks" */))
const _27184a0e = () => interopDefault(import('..\\pages\\how-to-apply\\nonf1.vue' /* webpackChunkName: "pages/how-to-apply/nonf1" */))
const _63f9ecdd = () => interopDefault(import('..\\pages\\how-to-apply\\others.vue' /* webpackChunkName: "pages/how-to-apply/others" */))
const _08c0915c = () => interopDefault(import('..\\pages\\how-to-apply\\overseas.vue' /* webpackChunkName: "pages/how-to-apply/overseas" */))
const _fb52771c = () => interopDefault(import('..\\pages\\how-to-apply\\short.vue' /* webpackChunkName: "pages/how-to-apply/short" */))
const _6ce8fe27 = () => interopDefault(import('..\\pages\\how-to-apply\\student-visa-f1\\index.vue' /* webpackChunkName: "pages/how-to-apply/student-visa-f1/index" */))
const _4e3ad40c = () => interopDefault(import('..\\pages\\how-to-apply\\visa_overseas.vue' /* webpackChunkName: "pages/how-to-apply/visa_overseas" */))
const _28ecb91e = () => interopDefault(import('..\\pages\\material\\thanks.vue' /* webpackChunkName: "pages/material/thanks" */))
const _5b2ad688 = () => interopDefault(import('..\\pages\\promo_contact\\thanks.vue' /* webpackChunkName: "pages/promo_contact/thanks" */))
const _65425c3e = () => interopDefault(import('..\\pages\\promo_material\\thanks.vue' /* webpackChunkName: "pages/promo_material/thanks" */))
const _3f760806 = () => interopDefault(import('..\\pages\\how-to-apply\\student-visa-f1\\change-of-status.vue' /* webpackChunkName: "pages/how-to-apply/student-visa-f1/change-of-status" */))
const _e6f4517c = () => interopDefault(import('..\\pages\\how-to-apply\\student-visa-f1\\overseas-students.vue' /* webpackChunkName: "pages/how-to-apply/student-visa-f1/overseas-students" */))
const _4b2bf70f = () => interopDefault(import('..\\pages\\how-to-apply\\student-visa-f1\\transfer-students.vue' /* webpackChunkName: "pages/how-to-apply/student-visa-f1/transfer-students" */))
const _1d9c5cbe = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _1829be09 = () => interopDefault(import('..\\pages\\_slug\\index.vue' /* webpackChunkName: "pages/_slug/index" */))
const _0f1c3978 = () => interopDefault(import('..\\pages\\_slug\\about.vue' /* webpackChunkName: "pages/_slug/about" */))
const _ea4c0b7c = () => interopDefault(import('..\\pages\\_slug\\admission\\index.vue' /* webpackChunkName: "pages/_slug/admission/index" */))
const _720268ac = () => interopDefault(import('..\\pages\\_slug\\careers.vue' /* webpackChunkName: "pages/_slug/careers" */))
const _f574cf18 = () => interopDefault(import('..\\pages\\_slug\\company.vue' /* webpackChunkName: "pages/_slug/company" */))
const _c5ffd3ea = () => interopDefault(import('..\\pages\\_slug\\contact\\index.vue' /* webpackChunkName: "pages/_slug/contact/index" */))
const _579ce574 = () => interopDefault(import('..\\pages\\_slug\\course.vue' /* webpackChunkName: "pages/_slug/course" */))
const _034dba0d = () => interopDefault(import('..\\pages\\_slug\\faq.vue' /* webpackChunkName: "pages/_slug/faq" */))
const _4cb71d4d = () => interopDefault(import('..\\pages\\_slug\\faq-covid19.vue' /* webpackChunkName: "pages/_slug/faq-covid19" */))
const _e5ca1b26 = () => interopDefault(import('..\\pages\\_slug\\feature.vue' /* webpackChunkName: "pages/_slug/feature" */))
const _9ffde1f0 = () => interopDefault(import('..\\pages\\_slug\\firstday-at-mli.vue' /* webpackChunkName: "pages/_slug/firstday-at-mli" */))
const _5646c781 = () => interopDefault(import('..\\pages\\_slug\\freetrial\\index.vue' /* webpackChunkName: "pages/_slug/freetrial/index" */))
const _439ba391 = () => interopDefault(import('..\\pages\\_slug\\going-to-college.vue' /* webpackChunkName: "pages/_slug/going-to-college" */))
const _5b1ae87c = () => interopDefault(import('..\\pages\\_slug\\havevisa.vue' /* webpackChunkName: "pages/_slug/havevisa" */))
const _76ea0176 = () => interopDefault(import('..\\pages\\_slug\\hollywood.vue' /* webpackChunkName: "pages/_slug/hollywood" */))
const _863737a0 = () => interopDefault(import('..\\pages\\_slug\\how-to-apply\\index.vue' /* webpackChunkName: "pages/_slug/how-to-apply/index" */))
const _6338f5ce = () => interopDefault(import('..\\pages\\_slug\\how-to-apply-for-a-student-visa.vue' /* webpackChunkName: "pages/_slug/how-to-apply-for-a-student-visa" */))
const _9a0f6fd2 = () => interopDefault(import('..\\pages\\_slug\\image-gallery.vue' /* webpackChunkName: "pages/_slug/image-gallery" */))
const _729f9442 = () => interopDefault(import('..\\pages\\_slug\\material\\index.vue' /* webpackChunkName: "pages/_slug/material/index" */))
const _7c4a7a85 = () => interopDefault(import('..\\pages\\_slug\\mli-quarantine-policy.vue' /* webpackChunkName: "pages/_slug/mli-quarantine-policy" */))
const _d939cf70 = () => interopDefault(import('..\\pages\\_slug\\official-toefl-test.vue' /* webpackChunkName: "pages/_slug/official-toefl-test" */))
const _6cd19a00 = () => interopDefault(import('..\\pages\\_slug\\price.vue' /* webpackChunkName: "pages/_slug/price" */))
const _ac01b6e8 = () => interopDefault(import('..\\pages\\_slug\\price-auto.vue' /* webpackChunkName: "pages/_slug/price-auto" */))
const _adc9630a = () => interopDefault(import('..\\pages\\_slug\\promo_contact\\index.vue' /* webpackChunkName: "pages/_slug/promo_contact/index" */))
const _2c292c5c = () => interopDefault(import('..\\pages\\_slug\\promo_material\\index.vue' /* webpackChunkName: "pages/_slug/promo_material/index" */))
const _b71c542a = () => interopDefault(import('..\\pages\\_slug\\safety-covid19.vue' /* webpackChunkName: "pages/_slug/safety-covid19" */))
const _eb047524 = () => interopDefault(import('..\\pages\\_slug\\school-calendar.vue' /* webpackChunkName: "pages/_slug/school-calendar" */))
const _851b4a78 = () => interopDefault(import('..\\pages\\_slug\\school-magazine.vue' /* webpackChunkName: "pages/_slug/school-magazine" */))
const _fabc4e1c = () => interopDefault(import('..\\pages\\_slug\\stay.vue' /* webpackChunkName: "pages/_slug/stay" */))
const _65ad422c = () => interopDefault(import('..\\pages\\_slug\\teachers.vue' /* webpackChunkName: "pages/_slug/teachers" */))
const _ae00cfd4 = () => interopDefault(import('..\\pages\\_slug\\testimonial.vue' /* webpackChunkName: "pages/_slug/testimonial" */))
const _7a9f0bcd = () => interopDefault(import('..\\pages\\_slug\\testimonials.vue' /* webpackChunkName: "pages/_slug/testimonials" */))
const _b3998df4 = () => interopDefault(import('..\\pages\\_slug\\visaholder.vue' /* webpackChunkName: "pages/_slug/visaholder" */))
const _0b31a975 = () => interopDefault(import('..\\pages\\_slug\\westwood.vue' /* webpackChunkName: "pages/_slug/westwood" */))
const _3eb697de = () => interopDefault(import('..\\pages\\_slug\\admission\\fail.vue' /* webpackChunkName: "pages/_slug/admission/fail" */))
const _67e3c009 = () => interopDefault(import('..\\pages\\_slug\\admission\\thanks.vue' /* webpackChunkName: "pages/_slug/admission/thanks" */))
const _cafdc540 = () => interopDefault(import('..\\pages\\_slug\\contact\\thanks.vue' /* webpackChunkName: "pages/_slug/contact/thanks" */))
const _0a109aaa = () => interopDefault(import('..\\pages\\_slug\\freetrial\\thanks.vue' /* webpackChunkName: "pages/_slug/freetrial/thanks" */))
const _18e66076 = () => interopDefault(import('..\\pages\\_slug\\how-to-apply\\nonf1.vue' /* webpackChunkName: "pages/_slug/how-to-apply/nonf1" */))
const _a822b916 = () => interopDefault(import('..\\pages\\_slug\\how-to-apply\\others.vue' /* webpackChunkName: "pages/_slug/how-to-apply/others" */))
const _194127ea = () => interopDefault(import('..\\pages\\_slug\\how-to-apply\\overseas.vue' /* webpackChunkName: "pages/_slug/how-to-apply/overseas" */))
const _7424dada = () => interopDefault(import('..\\pages\\_slug\\how-to-apply\\short.vue' /* webpackChunkName: "pages/_slug/how-to-apply/short" */))
const _14e4f682 = () => interopDefault(import('..\\pages\\_slug\\how-to-apply\\student-visa-f1\\index.vue' /* webpackChunkName: "pages/_slug/how-to-apply/student-visa-f1/index" */))
const _a13ffb18 = () => interopDefault(import('..\\pages\\_slug\\how-to-apply\\visa_overseas.vue' /* webpackChunkName: "pages/_slug/how-to-apply/visa_overseas" */))
const _78d16609 = () => interopDefault(import('..\\pages\\_slug\\material\\thanks.vue' /* webpackChunkName: "pages/_slug/material/thanks" */))
const _11ccf2f0 = () => interopDefault(import('..\\pages\\_slug\\promo_contact\\thanks.vue' /* webpackChunkName: "pages/_slug/promo_contact/thanks" */))
const _29ff7b0e = () => interopDefault(import('..\\pages\\_slug\\promo_material\\thanks.vue' /* webpackChunkName: "pages/_slug/promo_material/thanks" */))
const _365bf26e = () => interopDefault(import('..\\pages\\_slug\\how-to-apply\\student-visa-f1\\change-of-status.vue' /* webpackChunkName: "pages/_slug/how-to-apply/student-visa-f1/change-of-status" */))
const _725d39da = () => interopDefault(import('..\\pages\\_slug\\how-to-apply\\student-visa-f1\\overseas-students.vue' /* webpackChunkName: "pages/_slug/how-to-apply/student-visa-f1/overseas-students" */))
const _310359a7 = () => interopDefault(import('..\\pages\\_slug\\how-to-apply\\student-visa-f1\\transfer-students.vue' /* webpackChunkName: "pages/_slug/how-to-apply/student-visa-f1/transfer-students" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _3a0530c7,
    name: "404"
  }, {
    path: "/about",
    component: _5d0c1248,
    name: "about"
  }, {
    path: "/admission",
    component: _04db90ac,
    name: "admission"
  }, {
    path: "/careers",
    component: _2953f644,
    name: "careers"
  }, {
    path: "/company",
    component: _3c97260c,
    name: "company"
  }, {
    path: "/contact",
    component: _280ee51a,
    name: "contact"
  }, {
    path: "/course",
    component: _c0d17648,
    name: "course"
  }, {
    path: "/faq",
    component: _341458b6,
    name: "faq"
  }, {
    path: "/faq-covid19",
    component: _824fc236,
    name: "faq-covid19"
  }, {
    path: "/feature",
    component: _446c8005,
    name: "feature"
  }, {
    path: "/firstday-at-mli",
    component: _401784a0,
    name: "firstday-at-mli"
  }, {
    path: "/freetrial",
    component: _6e01f62e,
    name: "freetrial"
  }, {
    path: "/going-to-college",
    component: _93583e0e,
    name: "going-to-college"
  }, {
    path: "/havevisa",
    component: _0552b12a,
    name: "havevisa"
  }, {
    path: "/hollywood",
    component: _bfe2ede4,
    name: "hollywood"
  }, {
    path: "/home",
    component: _ed9da440,
    name: "home"
  }, {
    path: "/how-to-apply",
    component: _69d36470,
    name: "how-to-apply"
  }, {
    path: "/how-to-apply-for-a-student-visa",
    component: _e2bd8934,
    name: "how-to-apply-for-a-student-visa"
  }, {
    path: "/image-gallery",
    component: _20df43af,
    name: "image-gallery"
  }, {
    path: "/material",
    component: _02b609da,
    name: "material"
  }, {
    path: "/mli-quarantine-policy",
    component: _74af43c6,
    name: "mli-quarantine-policy"
  }, {
    path: "/official-toefl-test",
    component: _bcd5fc40,
    name: "official-toefl-test"
  }, {
    path: "/price",
    component: _bac172d0,
    name: "price"
  }, {
    path: "/price-auto",
    component: _b528e018,
    name: "price-auto"
  }, {
    path: "/promo_contact",
    component: _612697e3,
    name: "promo_contact"
  }, {
    path: "/promo_material",
    component: _33494d6a,
    name: "promo_material"
  }, {
    path: "/safety-covid19",
    component: _192b655a,
    name: "safety-covid19"
  }, {
    path: "/school-calendar",
    component: _1a943b06,
    name: "school-calendar"
  }, {
    path: "/school-magazine",
    component: _4d88d05c,
    name: "school-magazine"
  }, {
    path: "/stay",
    component: _16061b4c,
    name: "stay"
  }, {
    path: "/teachers",
    component: _00098452,
    name: "teachers"
  }, {
    path: "/testimonial",
    component: _1b2099ae,
    name: "testimonial"
  }, {
    path: "/testimonials",
    component: _4c9e3d35,
    name: "testimonials"
  }, {
    path: "/visaholder",
    component: _bcc0b724,
    name: "visaholder"
  }, {
    path: "/westwood",
    component: _3e11cedd,
    name: "westwood"
  }, {
    path: "/admission/fail",
    component: _6265e514,
    name: "admission-fail"
  }, {
    path: "/admission/thanks",
    component: _4c332fa1,
    name: "admission-thanks"
  }, {
    path: "/contact/thanks",
    component: _2a9792f8,
    name: "contact-thanks"
  }, {
    path: "/freetrial/thanks",
    component: _233feb7c,
    name: "freetrial-thanks"
  }, {
    path: "/how-to-apply/nonf1",
    component: _27184a0e,
    name: "how-to-apply-nonf1"
  }, {
    path: "/how-to-apply/others",
    component: _63f9ecdd,
    name: "how-to-apply-others"
  }, {
    path: "/how-to-apply/overseas",
    component: _08c0915c,
    name: "how-to-apply-overseas"
  }, {
    path: "/how-to-apply/short",
    component: _fb52771c,
    name: "how-to-apply-short"
  }, {
    path: "/how-to-apply/student-visa-f1",
    component: _6ce8fe27,
    name: "how-to-apply-student-visa-f1"
  }, {
    path: "/how-to-apply/visa_overseas",
    component: _4e3ad40c,
    name: "how-to-apply-visa_overseas"
  }, {
    path: "/material/thanks",
    component: _28ecb91e,
    name: "material-thanks"
  }, {
    path: "/promo_contact/thanks",
    component: _5b2ad688,
    name: "promo_contact-thanks"
  }, {
    path: "/promo_material/thanks",
    component: _65425c3e,
    name: "promo_material-thanks"
  }, {
    path: "/how-to-apply/student-visa-f1/change-of-status",
    component: _3f760806,
    name: "how-to-apply-student-visa-f1-change-of-status"
  }, {
    path: "/how-to-apply/student-visa-f1/overseas-students",
    component: _e6f4517c,
    name: "how-to-apply-student-visa-f1-overseas-students"
  }, {
    path: "/how-to-apply/student-visa-f1/transfer-students",
    component: _4b2bf70f,
    name: "how-to-apply-student-visa-f1-transfer-students"
  }, {
    path: "/",
    component: _1d9c5cbe,
    name: "index"
  }, {
    path: "/:slug",
    component: _1829be09,
    name: "slug"
  }, {
    path: "/:slug/about",
    component: _0f1c3978,
    name: "slug-about"
  }, {
    path: "/:slug/admission",
    component: _ea4c0b7c,
    name: "slug-admission"
  }, {
    path: "/:slug/careers",
    component: _720268ac,
    name: "slug-careers"
  }, {
    path: "/:slug/company",
    component: _f574cf18,
    name: "slug-company"
  }, {
    path: "/:slug/contact",
    component: _c5ffd3ea,
    name: "slug-contact"
  }, {
    path: "/:slug/course",
    component: _579ce574,
    name: "slug-course"
  }, {
    path: "/:slug/faq",
    component: _034dba0d,
    name: "slug-faq"
  }, {
    path: "/:slug/faq-covid19",
    component: _4cb71d4d,
    name: "slug-faq-covid19"
  }, {
    path: "/:slug/feature",
    component: _e5ca1b26,
    name: "slug-feature"
  }, {
    path: "/:slug/firstday-at-mli",
    component: _9ffde1f0,
    name: "slug-firstday-at-mli"
  }, {
    path: "/:slug/freetrial",
    component: _5646c781,
    name: "slug-freetrial"
  }, {
    path: "/:slug/going-to-college",
    component: _439ba391,
    name: "slug-going-to-college"
  }, {
    path: "/:slug/havevisa",
    component: _5b1ae87c,
    name: "slug-havevisa"
  }, {
    path: "/:slug/hollywood",
    component: _76ea0176,
    name: "slug-hollywood"
  }, {
    path: "/:slug/how-to-apply",
    component: _863737a0,
    name: "slug-how-to-apply"
  }, {
    path: "/:slug/how-to-apply-for-a-student-visa",
    component: _6338f5ce,
    name: "slug-how-to-apply-for-a-student-visa"
  }, {
    path: "/:slug/image-gallery",
    component: _9a0f6fd2,
    name: "slug-image-gallery"
  }, {
    path: "/:slug/material",
    component: _729f9442,
    name: "slug-material"
  }, {
    path: "/:slug/mli-quarantine-policy",
    component: _7c4a7a85,
    name: "slug-mli-quarantine-policy"
  }, {
    path: "/:slug/official-toefl-test",
    component: _d939cf70,
    name: "slug-official-toefl-test"
  }, {
    path: "/:slug/price",
    component: _6cd19a00,
    name: "slug-price"
  }, {
    path: "/:slug/price-auto",
    component: _ac01b6e8,
    name: "slug-price-auto"
  }, {
    path: "/:slug/promo_contact",
    component: _adc9630a,
    name: "slug-promo_contact"
  }, {
    path: "/:slug/promo_material",
    component: _2c292c5c,
    name: "slug-promo_material"
  }, {
    path: "/:slug/safety-covid19",
    component: _b71c542a,
    name: "slug-safety-covid19"
  }, {
    path: "/:slug/school-calendar",
    component: _eb047524,
    name: "slug-school-calendar"
  }, {
    path: "/:slug/school-magazine",
    component: _851b4a78,
    name: "slug-school-magazine"
  }, {
    path: "/:slug/stay",
    component: _fabc4e1c,
    name: "slug-stay"
  }, {
    path: "/:slug/teachers",
    component: _65ad422c,
    name: "slug-teachers"
  }, {
    path: "/:slug/testimonial",
    component: _ae00cfd4,
    name: "slug-testimonial"
  }, {
    path: "/:slug/testimonials",
    component: _7a9f0bcd,
    name: "slug-testimonials"
  }, {
    path: "/:slug/visaholder",
    component: _b3998df4,
    name: "slug-visaholder"
  }, {
    path: "/:slug/westwood",
    component: _0b31a975,
    name: "slug-westwood"
  }, {
    path: "/:slug/admission/fail",
    component: _3eb697de,
    name: "slug-admission-fail"
  }, {
    path: "/:slug/admission/thanks",
    component: _67e3c009,
    name: "slug-admission-thanks"
  }, {
    path: "/:slug/contact/thanks",
    component: _cafdc540,
    name: "slug-contact-thanks"
  }, {
    path: "/:slug/freetrial/thanks",
    component: _0a109aaa,
    name: "slug-freetrial-thanks"
  }, {
    path: "/:slug/how-to-apply/nonf1",
    component: _18e66076,
    name: "slug-how-to-apply-nonf1"
  }, {
    path: "/:slug/how-to-apply/others",
    component: _a822b916,
    name: "slug-how-to-apply-others"
  }, {
    path: "/:slug/how-to-apply/overseas",
    component: _194127ea,
    name: "slug-how-to-apply-overseas"
  }, {
    path: "/:slug/how-to-apply/short",
    component: _7424dada,
    name: "slug-how-to-apply-short"
  }, {
    path: "/:slug/how-to-apply/student-visa-f1",
    component: _14e4f682,
    name: "slug-how-to-apply-student-visa-f1"
  }, {
    path: "/:slug/how-to-apply/visa_overseas",
    component: _a13ffb18,
    name: "slug-how-to-apply-visa_overseas"
  }, {
    path: "/:slug/material/thanks",
    component: _78d16609,
    name: "slug-material-thanks"
  }, {
    path: "/:slug/promo_contact/thanks",
    component: _11ccf2f0,
    name: "slug-promo_contact-thanks"
  }, {
    path: "/:slug/promo_material/thanks",
    component: _29ff7b0e,
    name: "slug-promo_material-thanks"
  }, {
    path: "/:slug/how-to-apply/student-visa-f1/change-of-status",
    component: _365bf26e,
    name: "slug-how-to-apply-student-visa-f1-change-of-status"
  }, {
    path: "/:slug/how-to-apply/student-visa-f1/overseas-students",
    component: _725d39da,
    name: "slug-how-to-apply-student-visa-f1-overseas-students"
  }, {
    path: "/:slug/how-to-apply/student-visa-f1/transfer-students",
    component: _310359a7,
    name: "slug-how-to-apply-student-visa-f1-transfer-students"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
