<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="container">
            <p>Find a home <span class="typed-text"></span><span class="cursor">&nbsp;</span></p>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="title">
            <h2>Basic Elements</h2>
          </div>
          <!-- <basic-elements></basic-elements> -->
        </div>
      </div>
      <div class="section section-navbars">
        <div class="container">
          <!-- <small-navigation></small-navigation> -->
        </div>
        <!-- <navigation></navigation> -->
      </div>
      <div class="section section-tabs">
        <div class="container">
          <!-- <tabs></tabs> -->
        </div>
      </div>
      <div class="section section-white">
        <div class="container">
          <!-- <nav-pills></nav-pills> -->
        </div>
      </div>
      <div class="section section-notifications">
        <div class="container">
          <div class="title">
            <h3>Notifications</h3>
          </div>
        </div>
        <!-- <notifications></notifications> -->
      </div>
      <div class="section">
        <div class="container">
          <!-- <typography-images></typography-images> -->
        </div>
      </div>
      <div class="section section-javascript">
        <div class="container">
          <!-- <javascript-components></javascript-components> -->
        </div>
      </div>
      <div class="section">
        <div class="container text-center">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 ml-auto mr-auto text-center"
            >
              <h2>Completed with examples</h2>
              <h4>
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. More importantly, looking at them will give you a picture of
                what you can built with this powerful kit.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BasicElements from "./components/BasicElementsSection";


export default {

  name: "index",
  bodyClass: "index-page",
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
  created(){
    setInterval(this.letterAnimation, 1000);
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false,
      typed_text_flag_i:0,
      typed_text_flag_j:0,
      content_text:["that fulfill your needs", "with great investment plans", "with smart choices", "with an amazing ambience"],
      typed_text_span : this.$el.getElementsByClassName("typed-text")[0],
      typed_text_adding: true,
      cursor_text: this.$el.getElementsByClassName("cursor")[0],
      text: "",
      typed_text_len : 0
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
    
  letterAnimation: function() {
        console.log(this.typed_text_flag_j)
        if(this.typed_text_adding){
        if(this.typed_text_flag_j>3) this.typed_text_flag_j=0;
        this.text = this.content_text[this.typed_text_flag_j];
        this.typed_text_len = this.text.length;
        this.text = "          " + this.text + "          ";
        if(this.typed_text_flag_i<(this.typed_text_len+20)){
          if(this.typed_text_flag_i==10) this.cursor_text.classList.add("typing");
          if(this.typed_text_flag_i<10) if(this.cursor_text.classList.contains("typing")) this.cursor_text.classList.remove("typing");
          if(this.typed_text_flag_i>(10 + this.typed_text_len)) if(this.cursor_text.classList.contains("typing")) this.cursor_text.classList.remove("typing");
          this.typed_text_span.innerHTML = this.typed_text_span.innerHTML + text[this.typed_text_flag_i];
          this.typed_text_flag_i++;
        }else {this.typed_text_adding = false;}
      }else{
        if(this.typed_text_flag_i>=0){
          if(this.typed_text_flag_i==(10 + this.typed_text_len)) this.cursor_text.classList.add("typing");
          if(this.typed_text_flag_i<10) if(this.cursor_text.classList.contains("typing")) this.cursor_text.classList.remove("typing");
          if(this.typed_text_flag_i>(10 + this.typed_text_len)) if(this.cursor_text.classList.contains("typing")) this.cursor_text.classList.remove("typing");
          this.typed_text_span.innerHTML = text.slice(0, this.typed_text_flag_i);
          this.typed_text_flag_i--;
        }else {this.typed_text_adding = true;this.typed_text_flag_i=0;this.typed_text_flag_j++;}
      }
    }
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
    window.addEventListener("resize", this.leafActive);
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
