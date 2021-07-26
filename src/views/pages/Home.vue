<template>
  <v-row>
    <v-col>
      <v-card dense>
        <v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              class="mr-5"
              rounded
              @click.stop="showDialog()"
            >
              Add
            </v-btn>
            <v-text-field
              v-model="search"
              dense
              append-icon="mdi-magnify"
              class="shrink mr-3"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-divider vertical class="py-5"></v-divider>
          </v-card-actions>
          <v-data-table
            :search="search"
            item-key="id"
            :mobile-breakpoint="0"
            :calculate-widths="false"
            :headers="headers"
            :items="items"
            sort-by="id"
            :sort-desc="true"
            :items-per-page="5"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn icon @click.stop="showDialog(item)" small>
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon @click="remove(item)" small>
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
      <v-dialog v-model="dialog" max-width="500" @click:outside="close()">
        <ValidationObserver v-slot="{ invalid }" ref="observer">
          <v-card>
            <v-card-title class="primary mb-6 white--text overline">
              {{ cardTitle }}
            </v-card-title>

            <v-card-text>
              <ValidationProvider
                name="name"
                rules="required"
                v-slot="{ errors }"
              >
                <v-text-field
                  name="name"
                  label="Name"
                  dense
                  v-model="item.name"
                  :error-messages="errors"
                  required
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider
                name="calories"
                rules="required|number"
                v-slot="{ errors }"
              >
                <v-text-field
                  name="calories"
                  label="Calories"
                  dense
                  v-model="item.calories"
                  :error-messages="errors"
                  required
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider
                name="fat"
                rules="required|number"
                v-slot="{ errors }"
              >
                <v-text-field
                  name="fat"
                  label="Fat"
                  dense
                  v-model="item.fat"
                  :error-messages="errors"
                  required
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider
                name="carbs"
                rules="required|number"
                v-slot="{ errors }"
              >
                <v-text-field
                  name="carbs"
                  label="Carbs"
                  dense
                  v-model="item.carbs"
                  :error-messages="errors"
                  required
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider
                name="protein"
                rules="required|number"
                v-slot="{ errors }"
              >
                <v-text-field
                  name="protein"
                  label="Protein"
                  dense
                  v-model="item.protein"
                  :error-messages="errors"
                  required
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider
                name="iron"
                rules="required|number"
                v-slot="{ errors }"
              >
                <v-text-field
                  name="iron"
                  label="Iron"
                  dense
                  v-model="item.iron"
                  :error-messages="errors"
                  required
                ></v-text-field>
              </ValidationProvider>
            </v-card-text>

            <v-card-actions>
              <v-btn
                :loading="loading"
                text
                color="primary"
                class="mr-3"
                @click="create()"
                :disabled="invalid"
                :dark="!invalid"
              >
                Save
              </v-btn>
              <v-btn text color="primary" @click="close()"> Close </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </ValidationObserver>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      selectedItem: null,
      cardTitle: "Create Item",
      search: "",
      dialog: false,
      loading: false,
      item: {
        name: null,
        calories: null,
        fat: null,
        carbs: null,
        protein: null,
        iron: null,
      },
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      items: [
        {
          id: 1,
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
        },
        {
          id: 2,
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          id: 3,
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          id: 4,
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          id: 5,
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          id: 6,
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          id: 7,
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          id: 8,
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          id: 9,
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
      ],
    };
  },
  methods: {
    //Creates or updates item depending on whether item arg is provided
    create() {
      if (this.selectedItem) {
        let item = this.items.find((x) => x.id == this.selectedItem.id);
        this.set(this.item, item);
      } else {
        let item = this.item;
        item["id"] = this.items.length + 1;
        this.items.push(this.item);
      }
      this.close();
    },
    // deletes item from items
    remove(item) {
      const index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },
    //shows Create or update dialog depending on whether item arg is provided
    showDialog(item) {
      if (item) {
        this.selectedItem = item;
        this.set(item, this.item);
      } else {
        this.selectedItem = null;
        this.reset(this.item);
      }
      this.dialog = true;
    },

    // Reset item to null
    reset(item) {
      if (this.$refs.observer) {
        this.$refs.observer.reset();
      }
      this.selectedItem = null;
      this.cardTitle = "Create Item";
      for (let key of Object.keys(item)) {
        item[key] = null;
      }
    },

    // Set item with new value
    set(item, new_item) {
      this.cardTitle = "Update Item";
      for (let key of Object.keys(item)) {
        if (key in new_item) {
          new_item[key] = item[key];
        }
      }
    },

    // closes dialog
    close() {
      this.dialog = false;
    },
  },
};
</script>

<style lang="scss"></style>
