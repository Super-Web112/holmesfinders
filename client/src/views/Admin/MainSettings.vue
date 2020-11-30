<template>
  <div class="wrapper">
    <div id="navigation-pills">
      <div class="md-layout">

        
          <tabs
            :tab-name="['Buy', 'Sell','Cities', 'Office Space','Services', 'News & Insights']"
            :tab-icon="['add_shopping_cart', 'transfer_within_a_station','commute', 'important_devices','add_circle_outline', 'textsms']"
            
            plain
            flex-column
            nav-pills-icons
            color-button="info"
          >
          
            <!-- here you can add your content for tab-content -->
            <template slot="tab-pane-1">
              <buy></buy>
            </template>
            <template slot="tab-pane-2">
             <buy></buy>
            </template>

            <template slot="tab-pane-3">
             <buy></buy>
            </template>

            <template slot="tab-pane-4">
              <buy></buy>
            </template>

            <template slot="tab-pane-5">
             <buy></buy>
            </template>

            <template slot="tab-pane-6">
            <buy></buy>
            </template>
          </tabs>
        </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import Buy from "./Buy";

export default {
  components: {
    Tabs,
    Buy
  }
};
</script>

<style lang="css">
.wrapper{
  width: 100%;
}
.tab-content{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 100%;
  margin-right: 20px;
  padding-top: 15px !important;
}


</style>
