<template>
  <v-app>
    <v-footer class="bg-grey-lighten-3 v-footer--border footer-container">
      <div class="footer-cols">
        <div class="footer-col">
          <p>About us</p>
          <p>Our doctors</p>
          <p>Our vet clinics</p>
          <p>Enroll to the appointment</p>
          <p>Discount</p>
        </div>
        <div class="footer-col">
          <p>Why PetDoctor?</p>
          <p>Vacancy</p>
          <p>Cost of services</p>
          <p>News</p>
          <p>Contacts</p>
        </div>
        <div class="footer-col">
          <p>+7 (965) 688-17-10</p>
          <p>petdoctor@yandex.ru</p>
          <p>pet-doctor.spb.com</p>
        </div>
      </div>
      <v-toolbar-items class="h-100 w-100 flex-row justify-md-space-evenly align-end">
        <v-list-item>
          <img src="../assets/GitIcon.svg" width=20 alt="github">
        </v-list-item>
        <v-list-item>
          <img src="../assets/FacebookIcon.svg" width=20 alt="github">
        </v-list-item>
        <v-list-item>
          <img src="../assets/TelegramIcon.svg" width=20 alt="github">
        </v-list-item>
      </v-toolbar-items>
    </v-footer>
  </v-app>
  <router-view/>
</template>

<style scoped>
.footer-container {
  display: grid;
  grid-template-columns: 80% 10%;
  max-height: 300px;
}

.footer-cols {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
}

.footer-col {
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10%;
}

</style>

<script>
export default {
  data: () => ({
    name: "PetDoctorFooter"
  })
}
</script>
