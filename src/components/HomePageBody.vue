<template>
  <v-container class="flex-column justify-sm-start" style="margin-top: 5%">
    <v-row class="flex-row justify-sm-space-evenly">
      <v-responsive class="flex-row justify-sm-center">
        <v-select
          label="Show doctor categories"
          :items="['Cardiologist', 'Cosmetologist', 'Dermatologist', 'Logopedist', 'Masseur', 'Neurologist', 'Nutritionist']"
          style="width: 75%"
        ></v-select>
      </v-responsive>
      <v-responsive>
        <v-select
          label="All VetClinics"
          :items="['Birzhevaya', 'Chaykovskogo', 'Grivtcova', 'Kronverksky', 'Lomonosova']"
          style="width: 65%"
        ></v-select>
      </v-responsive>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomePageBody"
}
</script>

<style scoped>

</style>
