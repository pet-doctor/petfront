<template>
  <v-toolbar>
    <router-link :to="{ name:'Home' }">
      <div>
        <img style="padding-top: 5%" src="../assets/PetDoctorLogo.png" alt="Logo" width=70>
      </div>
    </router-link>

    <v-toolbar-items>
      <v-btn :to="{ name: 'Make An Appointment' }" class="text-grey-darken-3">
        Make An Appointment
      </v-btn>
      <v-btn :to="{ name: 'Our Doctors' }" class="text-grey-darken-3">
        Our Doctors
      </v-btn>
      <v-btn
        v-if="!authorized"
        @click="() => { authorized = !authorized }"
      >
        Sign in
      </v-btn>
      <v-row
        class="pa-3"
        v-else
      >
        <v-btn

        >
          Profile
        </v-btn>
        <v-btn
          @click="() => { authorized = !authorized }"
        >
          Log Out
        </v-btn>
      </v-row>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-img
      cover
      style="padding-top: 30px"
      src="@/assets/raccoon-svgrepo-com.svg"
    >

    </v-img>
  </v-toolbar>
  <router-view/>
</template>

<script>
export default {
  data: () => ({
    name: "PetDoctorHeader",
    authorized: false
  })
}
</script>

<style scoped>

</style>
