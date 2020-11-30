<template>
  <footer id="footer">
    <div id="footer-link">
      <a href="#">Contact us</a>
      <a href="#">FAQ</a>
      <a href="#">About us</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Buy with Holmesfinders</a>
      <a href="#">Sell with Holmesfinders</a>
    </div>
    <div id="footer-site">
      <div>Connect with us</div>
      <div class="sites">
        <a href="#"><img src="@/assets/img/ic_facebook.png" alt="facebook"></a>
        <a href="#"><img src="@/assets/img/ic_instagram.png" alt="instagram"></a>
        <a href="#"><img src="@/assets/img/ic_linkedin.png" alt="linked in"></a>
      </div>
    </div>
    <div id="footer-description">
	    © copyright 2020 www.holmesfinders.com. All trademarks, logos and names are properties of  the holmesfinders. All Rights Reserved.
    </div>
  </footer>
</template>
<script>
export default {
  name: "index",
  bodyClass: "index-page",
}
</script>
<style>
#footer{
  background-color: #515151;
  width: 100%;
  padding: 30px 20px 60px 20px;
}
#footer>div{
  display: flex;
  justify-content: center;
  align-items: center;
}
#footer-link{
  margin-bottom:20px;
}
#footer-link>a{
  color: #FFF !important;
  font-size: 16px;
  margin: 3px 10px;
}
#footer-link>a:hover{
  color:rgba(217,74,74,1) !important;
}
footer#footer>#footer-site{
  display: block;
  margin: 30px 0;
}
#footer-site>div{
  color: #FFF !important;
  font-size: 24px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
}
#footer-site>div>a{
  margin: 0px 10px;
}
.ic-instagram{
  widows: 40px;
  height: 40px;
}
#footer-description{
  color: #FFF !important;
  font-size: 16px;
  max-width: 720px;
  margin: 30px auto;
  text-align: center;
}
</style>
