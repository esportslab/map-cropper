<template>
  <v-app id="inspire" flat>
    <v-navigation-drawer
      v-model="drawer"
      app
      flat
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="8"
        >
          <v-row class="mt-3 px-3"
          >
            <h2 class="accent01--text">DE_DUST2</h2>
            <v-spacer/>
            <v-btn
              class="mx-1"
              color="info"
            >
              <span>
                Motion
              </span>
            </v-btn>
            <v-btn
              class="mx-1"
              color="info"
            >
              <span>
                Damage
              </span>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <br/>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="8"
        >
          <cropper
            :src="img"
            @change="change"
          />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'

export default {
	components: {
		Cropper,
	},
	data() {
		return {
            img: 'public/img/maps/de_dust2.png',
            drawer: null
		};
	},
	methods: {
		change({ coordinates, canvas }) {
			console.log(coordinates, canvas);
		}
	}
}
</script>

<style scoped>
</style>
