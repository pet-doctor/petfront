<template>
  <v-toolbar>
    <router-link :to="{ name:'Home' }">
      <div>
        <img style="padding-top: 5%" src="../assets/PetDoctorLogo.png" alt="Logo" width=70>
      </div>
    </router-link>

    <v-toolbar-items>
      <v-btn :to="{ name: 'Make An Appointment' }" class="text-grey-darken-3">Make An Appointment</v-btn>
      <v-btn :to="{ name: 'Our Doctors' }" class="text-grey-darken-3">Our Doctors</v-btn>
      <v-btn class="text-grey-darken-3">Sign in</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-layout row align-center style="max-width: 30vw; min-width:1vw;">
      <v-text-field
        solo
        placeholder="Find on site"
        single-line
        append-icon="search"
        background-color="#202d3f"
        color="white"
        hide-details
      ></v-text-field>
    </v-layout>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
