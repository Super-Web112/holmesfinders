<template>
  <div class="section section-welcome">
    <div class="section-title">
      <h2>Welcome To Holmesfinders.com</h2>
      <p>India's No.1 Real Estate Website</p>
    </div>
    <div class="elementor-container">
      <div class="elementor-widget-container">
        <div class="elementor-image-box-wrapper">
          <figure class="elementor-image-box-img">
            <img width="273" height="182" src="https://www.holmesfinders.com/wp-content/uploads/2020/10/Buy-2.jpg" data-src="https://www.holmesfinders.com/wp-content/uploads/2020/10/Buy-2.jpg" class="elementor-animation-pulse-shrink attachment-full size-full" alt="" loading="lazy" srcset="" data-srcset="">
          </figure>
          <div class="elementor-image-box-content">
            <h3 class="elementor-image-box-title">Buy </h3>
            <p class="elementor-image-box-description">Are you looking to buy a house? Now you can
  Select a house that meets your expectations ranging from sizes &amp; prices. Most importantly
  find a house that you would love with holmesfinders.</p>
          </div>
        </div>		
      </div>
      <div class="elementor-widget-container">
        <div class="elementor-image-box-wrapper">
          <figure class="elementor-image-box-img">
            <img width="273" height="181" src="https://www.holmesfinders.com/wp-content/uploads/2020/10/Sell-2.jpg" data-src="https://www.holmesfinders.com/wp-content/uploads/2020/10/Sell-2.jpg" class="elementor-animation-pulse-shrink attachment-full size-full" alt="" loading="lazy" srcset="" data-srcset="">
          </figure>
          <div class="elementor-image-box-content">
            <h3 class="elementor-image-box-title">Sell</h3>
            <p class="elementor-image-box-description">The way of selling your house effectively to ensure a smooth &amp; painless transition to your next stage of life. Findout how holmesfinders saves you from unnecessary charges.</p>
          </div>
        </div>
      </div>
      <div class="elementor-widget-container">
        <div class="elementor-image-box-wrapper">
          <figure class="elementor-image-box-img">
            <img width="273" height="182" src="https://www.holmesfinders.com/wp-content/uploads/2020/10/Rent-2.jpg" data-src="https://www.holmesfinders.com/wp-content/uploads/2020/10/Rent-2.jpg" class="elementor-animation-pulse-shrink attachment-full size-full" alt="" loading="lazy" srcset="" data-srcset="">
          </figure>
          <div class="elementor-image-box-content">
            <h3 class="elementor-image-box-title">Rent</h3>
            <p class="elementor-image-box-description">Start receiving a stable income by renting out your houses with holmesfinders real estate agents without troubling yourself. We find you the best and qualified tenants suits your budget.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  bodyClass: "index-page",
}
</script>
<style lang="scss">
.section.section-welcome{
  width: 100%;
  padding: 45px 0px 40px 0px;
  background-color: #F0F0F069;
}
.section-title{
  max-width: 1140px;
  margin: auto;
  margin-bottom: 40px;
}
.section-title>h2{
  font-family: "Poppins", Sans-serif;
  font-size: 35px;
  font-weight: 500;
  text-align: center;
}
.section-title>p{
  font-family: "Poppins", Sans-serif;
  font-size: 22px;
  font-weight: 300;
  text-align: center;
}
.elementor-widget-container{
  width: 33.33%;
}
.elementor-image-box-wrapper{
  margin: 20px;
  padding: 32px;
  border-radius: 5px;
  background-color: #FFF;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
}
.elementor-image-box-img{
  width:100%;
  height: auto;
  margin-bottom: 30px;
  text-align: center;
}
.elementor-image-box-img>img{
  width:100%;
  height: auto;
  max-width: 400px;
}
.elementor-image-box-img>img:hover{
  animation-name: elementor-animation-pulse-shrink;
  animation-duration: .3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes elementor-animation-pulse-shrink{
  to{transform:scale(0.9)}
}
.elementor-image-box-content{
  width: 100%;
  height: auto;
}
.elementor-image-box-title{
  width:100%;
  text-align: center;
}
.elementor-image-box-description{
  width: 100%;
  text-align: center;
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 100;
  line-height: 25px;
}
.elementor-container{
  max-width: 1140px;
  display: flex;
  margin: auto;
}
@media (max-width: 800px){
  .section-welcome .elementor-container{
    display: block;
  }
  .section-welcome .elementor-container .elementor-widget-container{
    width: 99.99%;
  }
}
</style>