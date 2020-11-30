<template>
  <div class="section section-tab">
    <div class="section-title">
      <p>Find a home <span class="typed-text" ref="typed_text">{{typed_text_content}}</span><span class="cursor" ref="cursor" v-bind:class="{ active: isActive }">&nbsp;</span></p>
    </div>
    <div class="elementor-container">
      <div class="tab-container">
        <ul class="tab-title-container">
          <li class="tab-title active">All Status</li>
          <li class="tab-title">Paying Guest</li>
          <li class="tab-title">Rent</li>
          <li class="tab-title">Sale</li>
        </ul>
        <div class="container">
          <!-- <div class="container"> -->
          <div class="md-layout md-gutter md-alignment-center tab-content">
              <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <label class="label">Cities</label>
                    <md-field>
                      <label for="movie">All Cities</label>
                      <md-select name="cities" id="cities">
                        <md-option value="fight-club">All Cities</md-option>
                        <md-option value="godfather">Adoni<small>Andhra Pradesh</small></md-option>
                        <md-option value="godfather-ii">Agartala<small>Tripura</small></md-option>
                        <md-option value="godfather-iii">Agra<small>Uttar Pradesh</small></md-option>
                        <md-option value="godfellas">Ahmadabad<small></small></md-option>
                        <md-option value="pulp-fiction">Ahmadnagar<small>Maharashtra</small></md-option>
                        <md-option value="scarface">Aizawl<small>Mizoram</small></md-option>
                      </md-select>
                    </md-field>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                 <label class="label">Property Type</label>
                    <md-field>
                      <label for="movies">All Types</label>
                      <md-select name="property" id="property" multiple>
                        <md-option value="fight-club">Commercial Land</md-option>
                        <md-option value="godfather">Office</md-option>
                        <md-option value="godfather-ii">Shop</md-option>
                        <md-option value="godfather-iii">Apartment</md-option>
                        <md-option value="godfellas">House/Villa</md-option>
                        <md-option value="pulp-fiction">Plot/Land</md-option>
                      </md-select>
                    </md-field>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                 <label class="label">Property Status</label>
                    <md-field>
                      <label for="movies">All Status</label>
                      <md-select  name="property" id="movies" multiple>
                        <md-option value="fight-club">Paying Guest</md-option>
                        <md-option value="godfather">Rent</md-option>
                        <md-option value="godfather-ii">Sale</md-option>
                      </md-select>
                    </md-field>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <label class="label">Max, Price</label>
                <md-field>
                  <label for="movie">Max. Price</label>
                  <md-select name="price" id="price">
                    <md-option value="fight-club">Max. Price</md-option>
                    <md-option value="godfather">Any</md-option>
                    <md-option value="godfather-ii">1,000</md-option>
                    <md-option value="godfather-iii">2,000</md-option>
                    <md-option value="godfellas">3,000</md-option>
                    <md-option value="pulp-fiction">4,000</md-option>
                    <md-option value="scarface">5,000</md-option>
                    <md-option value="godfather-ii">7,500</md-option>
                    <md-option value="godfather-iii">10,000</md-option>
                    <md-option value="godfellas">15,000</md-option>
                    <md-option value="pulp-fiction">20,000</md-option>
                    <md-option value="scarface">30,000</md-option>
                  </md-select>
                </md-field>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <md-button class="md-raised md-danger search-button"><md-icon>search</md-icon>Search</md-button>
              </div>
          <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  


data() {
    return {
      isActive: false,
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
methods:{
  letterAnimation: function() {
        if(this.typed_text_adding){
        if(this.typed_text_flag_j>3) this.typed_text_flag_j=0;
        this.text = this.content_text[this.typed_text_flag_j];
        this.typed_text_len = this.text.length;
        this.text = "          " + this.text + "          ";
        if(this.typed_text_flag_i<(this.typed_text_len+20)){
          if(this.typed_text_flag_i==10) this.isActive=true;
          if(this.typed_text_flag_i<10) if(this.isActive) this.isActive=false;
          if(this.typed_text_flag_i>(10 + this.typed_text_len)) if(this.isActive) this.isActive=false;
          this.typed_text_content = this.typed_text_content + this.text[this.typed_text_flag_i];
          this.typed_text_flag_i++;
        }else {this.typed_text_adding = false;}
      }else{
        if(this.typed_text_flag_i>=0){
          if(this.typed_text_flag_i==(10 + this.typed_text_len)) this.isActive=true;
          if(this.typed_text_flag_i<10) if(this.isActive) this.isActive=false;
          if(this.typed_text_flag_i>(10 + this.typed_text_len)) if(this.isActive) this.isActive=false;
          this.typed_text_content = this.text.slice(0, this.typed_text_flag_i);
          this.typed_text_flag_i--;
        }else {this.typed_text_adding = true;this.typed_text_flag_i=0;this.typed_text_flag_j++;}
      }
    },
    tabControl(){
      const tab_title = document.getElementsByClassName("tab-title");
      const tab_content = document.getElementsByClassName("tab-content");
      for(let i=0;i<tab_title.length;i++){
        tab_title[i].addEventListener("click", function(){
          for(let j=0;j<tab_title.length;j++){
            tab_title[j].setAttribute("class", "tab-title");
            // tab_content[j].setAttribute("class", "tab-content");
          }
          this.classList.add("active");
          // tab_content[i].classList.add("active");
        });
      }
    }
  },
  mounted(){
  setInterval(this.letterAnimation, 150);
    this.tabControl();
},
}
</script>
<style lang="scss" >
.one>.activation{
    color: #000000 !important;
    background-color: #ceccccde !important;
}
.one>.activation:hover{
  color: black !important;
}
.one>.activation:active{
  color: black !important;
}
.one>.activation:visited{
  color: black !important;
}
.one>.activation:focus{
  color: black !important;
}
.checked{
  background-color: rgb(231, 231, 229)  !important;
  color: black !important;
}
.change-item{
  background-color: #c0bcbcd1;
}
.md-ripple:no-button{
  background-color: fuchsia !important;  
}
.li-item{
}
.one{
  text-align: center;
}
.ul-item{
  display: flex;
  list-style: none;
  justify-content: center;
}
.md-ripple>span{
  margin-left: 50px;
  justify-content: center;
}
.edit{
  background-color: #f1f1f1;
  box-shadow: 9px 0px 24px 0px rgba(0,0,0,0.5);
  padding: 20px 10px 20px 10px;
}
.search-button{
  width: 100%;
}
.label{
  font-weight: bold;
  color: #000000;
}
.md-button{
      margin: 0.1rem 3px !important;
}
.section-tab{
  background-color: #d5d5d5;
}
div.section-tab p{
  font-size:3rem !important;
  padding:0.5rem;
  font-weight:bold;
  letter-spacing:0.1rem;
  text-align:center;
  color:#FFF;
  line-height:60px;
  }
  button.md-raised.md-danger.search-button{
    background-color:#e24f56 !important;
  }
  div.section-tab p span.typed-text{
  font-weight:normal;
  color:#e24f56 !important;
  }
  button.md-raised.md-danger.search-button:hover, button.md-raised.md-danger.search-button:active, button.md-raised.md-danger.search-button:focus{
  font-weight:normal;
  background-color:#ca232b;
  }
div.section-tab p span.cursor {
  display: inline-block;
  background-color: #ccc;
  margin-left: 0.1rem;
  width: 3px;
  animation: blink 1s infinite;
  height: 3rem;
}
div.section-tab p span.cursor.active {
  animation: none;
}
@keyframes blink {
  0%  { background-color: #ccc; }
  49% { background-color: #ccc; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
  100%  { background-color: #ccc; }
}
.tab-container{
  width: 100%;
  position: relative;
  margin: 20px auto;
}
.tab-title-container{
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;	    
    justify-content: center!important;
}
.tab-container li.tab-title{
    color: #ffffff;
    background-color: #CB232BD1;
    padding: 10px 25px 10px 25px;
    margin: 00px 1px 0px 1px;
    border-radius: 4px 4px 4px 4px;
    cursor: pointer;
}
.tab-container li.tab-title.active{
    color: #000000;
    background-color: #DFDFDF;
}
// .tab-content-container{
//   background-color: #f1f1f1;
//   min-height: 50px;
//   padding: 30px 30px 30px 30px;
//   border-radius: 4px 4px 4px 4px;
//   box-shadow: 9px 0px 24px 0px rgba(0,0,0,0.5);
// }
// .tab-content{
//   width: 100%;
//   height: 100%;
//   visibility: hidden;
//   justify-content: center;
//   align-items: center;
//   display: none;
// }
.tab-content{
  background-color: #F1F1F1 !important;
}
@media (max-width: 1280px){}
.md-layout.md-gutter {
    margin-right: 0px;
    margin-left: 0px;
}
</style>
