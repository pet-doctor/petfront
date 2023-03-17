<template>
  <v-container @click.right.prevent class="flex-column no-padding" style="margin-top: 5%">
    <v-carousel
      show-arrows="hover"
      class="bg-blue-grey-darken-4"
    >

      <v-carousel-item

      >

        <v-row
          justify="center"
          align="center"
          class="h-100 d-flex flex-row"
        >

          <v-card-text

            class="w-25 d-flex justify-center align-center">
            <p class="w-33 align-content-center font-carousel" style="white-space: normal; width: 20%; font-size: xx-large">WE WILL
              CURE YOUR PET EVEN IN THE OPEN SPACE</p>
          </v-card-text>

          <v-img
            src="../assets/dog-cosmos-svgrepo-com.svg"/>

        </v-row>
      </v-carousel-item>
      <v-carousel-item

      >

        <v-row
          justify="space-between"
          align="center"
          class="h-100 d-flex flex-row"
        >
          <v-img
            class="h-100 d-flex flex-column justify-end"
            height="150px"
            aspect-ratio="1/1"
            src="../assets/carrier-cat-svgrepo-com.svg"

          />
          <v-img
            src="../assets/cat-svgrepo-com.svg"
          />

          <v-card-text
            class="w-25 d-flex justify-center align-center">
            <p class="w-50 h-100 align-content-center font-carousel">
              WE PROVIDE THE BEST CARE FOR YOUR PETS WHILE YOU ARE AWAY
            </p>
          </v-card-text>

        </v-row>

      </v-carousel-item>
      <v-carousel-item

      >

        <v-row
          justify="space-between"
          align="center"
          class="h-100 d-flex flex-row"
        >

          <v-img
            src="../assets/veterinarian-svgrepo-com.svg"
          />

          <v-card-text
            class="w-25 d-flex justify-center align-center">
            <p class="w-33 h-100 align-content-center font-carousel" style="white-space: normal; font-size: xx-large">
              20% DISCOUNT ON YOUR FIRST ORDER
            </p>
          </v-card-text>

        </v-row>

      </v-carousel-item>
    </v-carousel>
    <!--    <v-row class="flex-row">-->
    <!--      <v-responsive class="flex-row align-center">-->
    <!--        <v-select-->
    <!--          label="Doctor category"-->
    <!--          :items="categories"-->
    <!--          v-model="this.chosenCategoryName"-->
    <!--          style="width: 75%"-->
    <!--        ></v-select>-->
    <!--      </v-responsive>-->
    <!--      <v-responsive class="flex-row align-center">-->
    <!--        <v-select-->
    <!--          label="Vet Clinic"-->
    <!--          :items="vetClinics"-->
    <!--          v-model="this.chosenVetClinicName"-->
    <!--          style="width: 65%"-->
    <!--        ></v-select>-->
    <!--      </v-responsive>-->
    <!--      <v-responsive class="flex-row align-center">-->
    <!--        <v-btn-->
    <!--          @click="showDoctors">-->
    <!--          Find doctors-->
    <!--        </v-btn>-->
    <!--      </v-responsive>-->
    <!--    </v-row>-->
    <!--    <v-responsive v-if="this.chosenCategoryName && this.chosenCategoryDoctors.length">-->
    <!--      <v-table class="bg-grey-lighten-3">-->
    <!--        <thead>-->
    <!--        <tr>-->
    <!--          <th class="text-grey-darken-3">-->
    <!--            Name-->
    <!--          </th>-->
    <!--          <th class="text-grey-darken-3">-->
    <!--            Surname-->
    <!--          </th>-->
    <!--          <th class="text-grey-darken-3">-->
    <!--            Email-->
    <!--          </th>-->
    <!--          <th class="text-grey-darken-3">-->
    <!--            Office-->
    <!--          </th>-->
    <!--        </tr>-->
    <!--        </thead>-->
    <!--        <tbody>-->
    <!--        <tr-->
    <!--          v-for="item in chosenCategoryDoctors"-->
    <!--          :key="item.id"-->
    <!--        >-->
    <!--          <td>{{ item.name }}</td>-->
    <!--          <td>{{ item.surname }}</td>-->
    <!--          <td>{{ item.email }}</td>-->
    <!--          <td>{{ item.doctor_office }}</td>-->
    <!--        </tr>-->
    <!--        </tbody>-->
    <!--      </v-table>-->
    <!--    </v-responsive>-->
    <!--    <v-responsive v-else-if="isChosen">-->
    <!--      <v-card-text class="bg-grey-lighten-3 text-grey-darken-3">There aren't any doctors by this condition (((</v-card-text>-->
    <!--    </v-responsive>-->

  </v-container>
  <v-container>
    <v-banner
      class="bg-blue-grey-darken-4"
    >

      <v-row>
        <v-col
          class="d-flex flex-column"
          align-self="center"
        >
          <v-img
            class="pa-1"
            height="100px"
            src="../assets/healthcare-building-svgrepo-com.svg"
          />

          <v-banner-text class="pa-5 d-flex flex-row justify-center font-banner">5 CLINICS IN SPB</v-banner-text>
        </v-col>
        <v-col
          class="d-flex flex-column"
        >
          <v-img
            height="100px"
            src="../assets/virus-research-corona-svgrepo-com.svg"
          />

          <v-banner-text class="pa-5 d-flex flex-row justify-center font-banner">MODERN LAB</v-banner-text>
        </v-col>
        <v-col

        >
          <v-img
            height="100px"
            src="../assets/worldwide-pandemic-svgrepo-com.svg"
          />

          <v-banner-text class="pa-5 d-flex flex-row justify-center font-banner">MODERN APPROACHES</v-banner-text>
        </v-col>

      </v-row>

    </v-banner>
  </v-container>

  <v-container
  >
    <v-row
      class="pa-5 d-flex flex-row justify-start"
    >
      <v-row class="w-25 d-flex flex-row justify-start align-center">
        <v-btn
          class="ma-10 h-75 w-25 bg-grey-lighten-3 text-grey-darken-3 font-banner"
        >
          SIGN IN
        </v-btn>
        <v-btn
          class="ma-10 h-75 w-25 bg-grey-lighten-3 text-grey-darken-3 font-banner"
        >
          SIGN UP
        </v-btn>
      </v-row>
      <v-btn
        class="ma-10 h-100 w-25 bg-grey-lighten-3 text-grey-darken-3 font-banner"
      >
        ENROLL TO THE<br>
        APPOINTMENT
      </v-btn>
    </v-row>

  </v-container>
  <router-view/>
</template>

<script>
const BASE_URL = `http://localhost:8080/petdoctor`;

export default {
  data: () => ({
    name: "HomePageBody",
    categories: ['Cardiologist', 'Cosmetologist', 'Dermatologist', 'Logopedist', 'Masseur', 'Neurologist', 'Nutritionist'],
    vetClinics: ['Birzhevaya', 'Chaykovskogo', 'Grivtcova', 'Kronverksky', 'Lomonosova'],
    chosenCategoryName: "",
    chosenVetClinicName: "",
    chosenCategoryDoctors: [],
    isChosen: false,
    chosenCategoryAppointments: [
      {
        Category: "egor",
        Time: "12:12",
        Cab: "1"
      },
      {
        Category: "krug",
        Time: "11:11",
        Cab: "2"
      }],
  }),

  methods: {

    // TODO: implement case when the server is not available :(
    async showDoctors() {

      const SHOW_DOCTORS_URL = `${BASE_URL}/employee/doctor`

      let doctorCategory = this.chosenCategoryName.toUpperCase()
      let vetClinicAddress = this.chosenVetClinicName === "" ?
        "DEFAULT" : this.chosenVetClinicName.toUpperCase()

      let params = {
        doctorCategory: doctorCategory,
        vetClinicAddress: vetClinicAddress
      }

      this.chosenCategoryDoctors = await (await fetch(SHOW_DOCTORS_URL + '?' + new URLSearchParams(params), {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
      })).json()

      this.isChosen = true
      console.log("showDoctors()")
    }
  },
}
</script>

<style>
.font-banner {
  font-size: 24px !important;
  text-align: center;
}

.font-carousel {
  font-size: 36px !important;
  text-align: center;
}

.bag {

}
</style>
