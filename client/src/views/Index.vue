<template>
  <div class="wrapper">
    <total-search></total-search>
    <!-- bodysection -->
    <body-section></body-section>

    <!-- Welcome----section -->
    <welcome-element></welcome-element>
    <!-- Carousel---section -->
    <div class="section section-carousel">
      <div class="section-title">
        <h2>Check Our Featured Listing</h2>
        <p>Get The Name Of The Best Real Estate Projects In Your Area</p>
      </div>
      
      <div class="elementor-container">
        <carousel 
          :per-page=perPagee 
          :mouse-drag="true" 
          :autoplay="false" 
          :loop="true" 
          :scrollPerPage="false"
        >
          <slide class="col-sm-4">
            <carousel-element></carousel-element>
          </slide>
          <slide class="col-sm-4">
            <carousel-element></carousel-element>
          </slide>
          <slide class="col-sm-4">
            <carousel-element></carousel-element>
          </slide>
          <slide class="col-sm-4">
            <carousel-element></carousel-element>
          </slide>
          <slide class="col-sm-4">
            <carousel-element></carousel-element>
          </slide>
          <slide class="col-sm-4">
            <carousel-element></carousel-element>
          </slide>
        </carousel>
      </div>

      <!-- middle-part -->
      <middle-part></middle-part>

      <!-- image-grid -->
      <image-grid></image-grid>

      <!-- Exploer Status -->
      <exploer-status></exploer-status>
      
    </div>
  </div>
</template>

<script>
// import BasicElements from "./components/BasicElementsSection";
import { Carousel, Slide } from 'vue-carousel';
import CarouselElement from './components/CarouselElement';
import WelcomeElement from './components/WelcomeElement';
import BodySection from './components/BodySection';
import TotalSearch from './components/TotalSearch';
import ImageGrid from './components/ImageGrid';
import MiddlePart from './components/MiddlePart';
import ExploerStatus from './components/ExploerStatus';
  
export default {

  name: "index",
  bodyClass: "index-page",
  components: {
    Carousel,
    Slide,
    CarouselElement,
    WelcomeElement,
    BodySection,
    TotalSearch,
    ImageGrid,
    MiddlePart,
    ExploerStatus
  },
  props: {

    image: {
      type: String,
      default: require("@/assets/img/real-estate.jpg")
    },
    leaf4: {
      type: String,
      default: require("@/assets/img/leaf4.png")
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/leaf3.png")
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png")
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/leaf1.png")
    },
    signup: {
      type: String,
      default: require("@/assets/img/city.jpg")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    }
  },
  data() {
    return {
      perPagee: 3,
      isActive: false,
      firstname: null,
      email: null,
      password: null,
      leafShow: false,
      typed_text_flag_i:0,
      typed_text_flag_j:0,
      content_text:["that fulfill your needs", "with great investment plans", "with smart choices", "with an amazing ambience"],
      typed_text_span : this.$refs.typed_text,
      typed_text_adding: true,
      cursor_text: this.$refs.cursor,
      text: "",
      typed_text_len : 0,
      typed_text_content: ""
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    },
    determinePerPage(){
      let windowWidth = window.innerWidth;
      let slideWidth = document.getElementsByClassName("col-sm-4")[0].clientWidth;
      this.perPagee = Math.floor(windowWidth/slideWidth);
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.determinePerPage);
    this.determinePerPage;
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
<style>

/*--------------- Carousel---css---------------*/
.section.section-check{
  width: 100%;
  padding: 45px 0px 40px 0px;
  background-color: #FFF;
}
.VueCarousel-pagination {
    position: relative !important;
    text-align: center;
}
.VueCarousel-dot-container>.VueCarousel-dot {
    border-radius: 50% !important;
}
.VueCarousel{
  width: 100%;
}
.VueCarousel-wrapper{
  width: 100%;
}
button:focus{
  outline: none !important;
}
/*------------------Welcome---css--------------*/

</style>
