<template>
    <div class="wrapper">
        <div class="container" style="max-width:1140px !important">
            <div class="subtitlebar">
                <h1 class="subtitleh1">Explore Lifestyle</h1>
                <h3 class="subtitleh3">Your One Stop Desination To Find Your Dream Property</h3>
            </div>
            <div class="md-layout md-gutter">
                <div class="md-layout-item first md-medium-size-95 md-small-size-100" :style="imageOne">
                    <div class="picture">
                        <h2 class="hletter">Apartment</h2>
                        <p class="pletter">3 PROPERTIES</p>
                    </div>
                </div>
                <div class="md-layout-item md-size-25 md-medium-size-45 md-small-size-100 md-xsmall-size-100 second" :style="imageTwo">
                    <div class="picture">
                        <h2 class="hletter">Commercial</h2>
                        <p class="pletter">0 PROPERTIES</p>
                    </div>
                </div>
                <div class="md-layout-item md-size-25 md-medium-size-45 md-small-size-100 md-xsmall-size-100 third" :style="imageThree">
                    <div class="picture">
                        <h2 class="hletter">House/Villa</h2>
                        <p class="pletter">1 PROPERTIES</p>
                    </div>
                </div>
            </div>
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-25 md-medium-size-45 md-small-size-100 md-xsmall-size-100 secondsecond" :style="imageFour">
                    <div class="pic">
                        <h2 class="hletter">Office</h2>
                        <p class="pletter">1 PROPERTIES</p>
                    </div>
                </div>
                <div class="md-layout-item md-size-25 md-medium-size-45 md-small-size-100 md-xsmall-size-100 thirdthird" :style="imageFive">
                    <div class="pic">
                        <h2 class="hletter">Plot/Land</h2>
                        <p class="pletter">1 PROPERTIES</p>
                    </div>
                </div>
                <div class="md-layout-item firstfirst md-medium-size-95 md-small-size-100" :style="imageSix">
                    <div class="pic">
                        <h2 class="hletter">Residential</h2>
                        <p class="pletter">0 PROPERTIES</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  components: {
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image1: {
      type: String,
      default: require("@/assets/img/image1.jpg")
    },
    image2: {
      type: String,
      default: require("@/assets/img/image2.jpg")
    },
    image3: {
      type: String,
      default: require("@/assets/img/image3.jpg")
    },
    image4: {
      type: String,
      default: require("@/assets/img/image4.jpg")
    },
    image5: {
      type: String,
      default: require("@/assets/img/image5.jpg")
    },
    image6: {
      type: String,
      default: require("@/assets/img/image6.jpg")
    }
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  },
  computed: {
    imageOne() {
      return {
        backgroundImage: `url(${this.image2})`
      };
    },
    imageTwo() {
      return {
        backgroundImage: `url(${this.image1})`
      };
    },
    imageThree() {
      return {
        backgroundImage: `url(${this.image3})`
      };
    },    
    imageFour() {
      return {
        backgroundImage: `url(${this.image4})`
      };
    },
    imageFive() {
      return {
        backgroundImage: `url(${this.image5})`
      };
    },
    imageSix() {
      return {
        backgroundImage: `url(${this.image6})`
      };
    }    
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
@media (max-width: 1280px){
    .first{
        margin-left: 15px;
    }
    .firstfirst{
        margin-left: 15px;
    }
    .second{
        margin-left: 30px !important;
    }
    .secondsecond{
        margin-left: 30px;
    }
}
.picture{
    text-align: center;
    padding: 100px 0px 100px 0px;
    background-repeat: no-repeat;
    max-width: 100% !important;
    cursor: pointer;
    z-index: 2;
    position: relative;
}
.pic{
    text-align: center;
    padding: 100px 0px 100px 0px;
    background-repeat: no-repeat;
    max-width: 100% !important;
    cursor: pointer;
    z-index: 2;
    position: relative;
}
.subtitlebar{
    text-align: center;
}
.subtitleh1{
    color: black;
    font-weight: bold;
}
.subtitleh3{
    color: black;
}
.first{
    margin-right: 30px;
    background-size: 100% 100%;
    border-radius: 5px;
    margin-bottom: 30px;
}
.firstfirst{
    background-size: 100% 100%;
    border-radius: 5px;
    margin-bottom: 20px;
}
.hletter{
    color: white;
    font-weight: bold;
}
.pletter{
    color: white;
    font-weight: bold;
}
.second{
    background-size: 100% 100%;
    margin-right: 30px;
    border-radius: 5px;
    margin-bottom: 30px;
    margin-left: 10px;
}
.secondsecond{
    background-size: 100% 100%;
    margin-right: 30px;
    border-radius: 5px;
    margin-bottom: 20px;
}
.third{
    background-size: 100% 100%;
    border-radius: 5px;
    margin-bottom: 30px;
}
.thirdthird{
    background-size: 100% 100%;
    border-radius: 5px;
    margin-bottom: 20px;
    margin-right: 30px;
}
.first {
    position: relative;
    cursor: pointer;
}
.first::before{
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all .2s;
}
.first:hover::before{
    background-color: transparent;
}
.second {
    position: relative;
    cursor: pointer;
}
.second::before{
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all .2s;
}
.second:hover::before{
    background-color: transparent;
}
.third {
    position: relative;
    cursor: pointer;
}
.third::before{
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all .2s;
}
.third:hover::before{
    background-color: transparent;
}
.firstfirst {
    position: relative;
    cursor: pointer;
}
.firstfirst::before{
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all .2s;
}
.firstfirst:hover::before{
    background-color: transparent;
}
.secondsecond {
    position: relative;
    cursor: pointer;
}
.secondsecond::before{
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all .2s;
}
.secondsecond:hover::before{
    background-color: transparent;
}
.thirdthird {
    position: relative;
    cursor: pointer;
}
.thirdthird::before{
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all .2s;
}
.thirdthird:hover::before{
    background-color: transparent;
}
</style>