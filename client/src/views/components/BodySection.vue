<template>
  <div class="wrapper">
    <div class="elementor-container" style="display:block;text-align:center;">
      <div>
        <img :src="advertise" class="advertise-img">
      </div>

      <div class="flex-columnn">
        <div class="each-flex-column">Why Holmesfinders.com is a perfect choice</div>
        <div class="each-flex-column">Holmesfinders.com is listed as one of the most premium real estate web portals in India. Be it a villa, an apartment or a commercial property, we give you a variety of options to choose from.</div>
      </div>
      <a href="#" class="index-learnmore">Learn More</a>
    </div>
      
  </div>
</template>

<script>

export default {
  props:{
      advertise: {
        type: String,
        default: require("@/assets/img/adver1.png")
      }
  },
  data() {
    return {
      defaultPagination: 3,
      infoPagination: 3,
      initial: null,
      floatingLabel: null,
      success: null,
      error: null,
      withMIcon: null,
      withFaIcon: null,
      checkbox1: true,
      checkbox2: null,
      checkbox3: true,
      checkbox4: null,
      radio1: true,
      radio2: false,
      switch1: true,
      switch2: null,
      amount: 30,
      amount2: 60,
      buffer: 40,
      sliders: {
        simple: 40,
        rangeSlider: [20, 60]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.index-learnmore{
  padding: 6px 20px;
  font-size: 18px;
  font-weight: 700;
  color: #FFF !important;
  background-color: #B32828;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
  margin: 50px auto;
  display: inline-block;
}
.advertise-img{
  width: 100%;
}
.vertical-center {
  display: flex;
  align-items: center;
}
.flex-columnn {
  display: flex;
  flex-direction: row;
  margin-top: 120px;
  text-align: left;
}
.each-flex-column{
  flex: 1;
  font-size: 30px;
  line-height: 49px;
  padding: 0px 20px;
}

.each-flex-column+.each-flex-column{
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
}
.md-checkbox,
.md-radio {
  display: flex;
  margin: 0;
  margin-bottom: 0.5rem;
}
</style>
