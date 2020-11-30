<template>
  <div class="wrapper">
    <parallax class="section ">
      
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">

            <main-settings></main-settings>

          </div>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
import MainSettings from "./MainSettings";
  export default {
    components:{
      MainSettings
    },
    bodyClass: "landing-page",
    props: {
     
      teamImg1: {
        type: String,
        default: require("@/assets/img/faces/avatar.jpg")
      },
      teamImg2: {
        type: String,
        default: require("@/assets/img/faces/christian.jpg")
      },
      teamImg3: {
        type: String,
        default: require("@/assets/img/faces/kendall.jpg")
      }
    },
    data() {
      return {
        name: null,
        email: null,
        message: null
      };
    },
    computed: {
      headerStyle() {
        return {
          backgroundImage: `url(${this.header})`
        };
      }
    }
  };
</script>

<style lang="scss" scoped>
  .md-card-actions.text-center {
    display: flex;
    justify-content: center !important;
  }
  .contact-form {
    margin-top: 30px;
  }

  .md-has-textarea + .md-layout {
    margin-top: 15px;
  }

  .border{
    height:600px;
    border: solid 1px;
  }

  @media (min-width: 1200px) {
    .section .container,
    .footer .container {
        max-width: 1340px !important;
    }
  }
</style>
