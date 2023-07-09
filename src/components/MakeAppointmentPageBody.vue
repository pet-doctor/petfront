<template>
  <v-container>
    <div class="buttons-container">
      <v-select
        label="Doctor category"
        :items="categories"
        v-model="this.chosenCategoryName"
        class="appointments-properties-selector"
      >
      </v-select>
      <v-select
        label="Vet Clinic"
        :items="vetClinics"
        v-model="this.chosenVetClinicName"
        class="appointments-properties-selector"
      >
      </v-select>
    </div>
    <appointments-calendar>

    </appointments-calendar>
  </v-container>
  <router-view/>
</template>

<style>

.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10%
}

.appointments-properties-selector {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40%;
}
</style>

<script>

import AppointmentsCalendar from "@/components/appointments-calendar.vue";

export default {
  components: {AppointmentsCalendar},
  data: () => ({
    name: "MakeAppointmentPageBody",
    appointments: [],
    categories: ['Cardiologist', 'Cosmetologist', 'Dermatologist', 'Logopedist', 'Masseur', 'Neurologist', 'Nutritionist'],
    vetClinics: ['Birzhevaya', 'Chaykovskogo', 'Grivtcova', 'Kronverksky', 'Lomonosova'],
    chosenCategoryName: "",
    chosenVetClinicName: "",
    chosenCategoryDoctors: []
  }),

  methods: {
    loadData() {
      return new Promise((resolve, reject) => {
        this.apiService.loadAppointmentsInfo()
          .then(({responseBody}) => {
            this.appointments = responseBody
            resolve()
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
  },
}
</script>
