<template>
  <div class="wrapper">
    <div id="nav-tabs" style="margin-right:30px; margin-top:-100px">
      <h3>Buy Settings...</h3>
      <div class="md-layout">
          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-success" md-alignment="left">
                <md-tab id="tab-cities" md-label="Add Cities" md-icon="add_location_alt">
                   <div>
                    <md-table v-model="users" @md-selected="onSelect">
                    <md-table-row>
                      <md-table-cell> Name </md-table-cell>
                      <md-table-cell> Location </md-table-cell>
                      <md-table-cell> Description </md-table-cell>
                      <md-table-cell> Edit/Delete </md-table-cell>

                    </md-table-row>
                      <md-table-row
                        slot="md-table-row"
                        slot-scope="{ item }"
                        md-selectable="multiple"
                        md-auto-select
                      >
                        <md-table-cell>{{ item.name }}</md-table-cell>
                        <md-table-cell>{{ item.location }}</md-table-cell>
                        <md-table-cell>{{ item.description }}</md-table-cell>
                        <md-table-cell>
                          <md-button class="md-just-icon md-simple md-primary">
                            <md-icon>edit</md-icon>
                          </md-button>
                          <md-button class="md-just-icon md-simple md-danger">
                            <md-icon>close</md-icon>
                          </md-button>
                        </md-table-cell>
                      </md-table-row>
                    </md-table>
                  </div>
                    
                </md-tab>

                <md-tab id="tab-finder" md-label="HolmesFinders" md-icon="add_circle_outline">
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. I will be the leader of a company that ends up
                    being worth billions of dollars, because I got the answers.
                    I understand culture. I am the nucleus. I think that’s a
                    responsibility that I have, to push possibilities, to show
                    people, this is the level that things could be at.
                </md-tab>

                <md-tab id="tab-setting" md-label="Settings" md-icon="add_task">
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>
    </div>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";

export default {
  components: {
    NavTabsCard
  },
  name: "nav-tabs-table",
  data() {
    return {
      selected: [],
      users: [
        {
          name: 'Sign contract for "What are conference organizers afraid of?"',
          location: 'Sign contract for "What are conference organizers afraid of?"',
          description: 'Sign contract for "What are conference organizers afraid of?"'
        },
        {
          name: "Lines From Great Russian Literature? Or E-mails From My Boss?",
          location: 'Sign contract for "What are conference organizers afraid of?"',
          description: 'Sign contract for "What are conference organizers afraid of?"'
        },
        {
          name:
            "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
            location: 'Sign contract for "What are conference organizers afraid of?"',
          description: 'Sign contract for "What are conference organizers afraid of?"'
        }
      ]
    };
  },
  methods: {
    onSelect: function(items) {
      this.selected = items;
    }
  }
};
</script>

<style lang="css">
.md-tabs-navigation{
  padding:0px 30px !important;
}

.md-button-content{
  padding: 5px 5px !important;
}

.md-tab-label{
  font-size: 13pt !important;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
}

.md-table .md-table-row:hover {
    background: #962a2a !important;
}
</style>
