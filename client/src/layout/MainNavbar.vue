<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start nav-bar-height ">
        
        <h3 class=" nav-bar-color md-logo "><img :src="mark" class="logo-position"/></h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
             
              <md-list-item
                href="#"
                v-if="showDownload"
                class="top-bar-border"
              >
                <!-- <i class="material-icons">cloud_download</i> -->
                 Post Property Free
              </md-list-item>

              <!--   /////////////////////////////////////////////////////////    -->
                      <li class="md-list-item">
                        <a
                          href="javascript:void(0)"
                          class="md-list-item-router md-list-item-container md-button-clean dropdown"
                        >
                          <div class="md-list-item-content">
                            <drop-down direction="down" class="profile-photo">
                              <div
                                class="profile-photo-small"
                                slot="title"
                                data-toggle="dropdown"
                              >
                                <img :src="img" alt="Circle Image" />
                              </div>
                              <ul class="dropdown-menu dropdown-menu-right">
                                <li class="dropdown-header">Dropdown header</li>
                                <li>
                                  <a href="#" class="dropdown-item">Me</a>
                                </li>
                                <li>
                                  <a href="#" class="dropdown-item"
                                    >Settings and other stuff</a
                                  >
                                </li>
                                <li>
                                  <a href="#" class="dropdown-item"
                                    >Sign Out</a
                                  >
                                </li>
                              </ul>
                            </drop-down>
                          </div>
                        </a>
                      </li>
              
              <!-- <md-list-item
                href="https://twitter.com/CreativeTim"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
                <p class="hidden-lg">Twitter</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Twitter</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://www.facebook.com/CreativeTim"
                target="_blank"
              >
                <i class="fab fa-facebook-square"></i>
                <p class="hidden-lg">Facebook</p>
                <md-tooltip md-direction="bottom"
                  >Like us on Facebook</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://www.instagram.com/CreativeTimOfficial"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
                <p class="hidden-lg">Instagram</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Instagram</md-tooltip
                >
              </md-list-item> -->
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    },
    mark: {
      type: String,
      default: require("@/assets/img/logo.png")
    },
      img: {
        type: String,
        default: require("@/assets/img/faces/avatar.jpg")
      }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
<style lang="scss">
.nav-bar-color {
  color:black;
}
.logo-position{
  width: 270px;
}

.nav-bar-height{
  height: 35px;
}

.top-bar-border{
    color: white !important;
    border-radius: 10px;
    border-color: black;
    background-color: #d1484e;
    margin-right: 20px;
}

.md-logo{
  height: 100px !important;
  margin-top: 35px !important;
  margin-bottom: 0px I !important;
}

</style>