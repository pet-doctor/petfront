<template>
  <table class="calendar bg-grey-lighten-3">
    <thead>
     <tr>
       <th class="flex-row justify-center">
         aboba
       </th>
     </tr>
    </thead>
    <tbody class="schedule">
<!--      <tr-->
<!--        v-for="dailyAppointmens in appointments"-->
<!--        :key="dailyAppointmens."-->
<!--      >-->
<!--        <td-->

<!--          v-for="appointment in dailyAppointmens">-->

<!--        </td>-->
<!--      </tr>-->
    </tbody>
  </table>
</template>

<style scoped>

.calendar {
  width: 100%;
  border-bottom: 1px solid black;
  border-radius: 3%;
}

.calendar__choose-date {
  width: 30%;
}

.schedule {
  display: grid;
  grid-template-columns: repeat(7, 14%);
}

.schedule-col {

}

</style>


<script>


export default {
  name: "appointments-calendar",
  // props: {
  //   modelValue: {
  //     type:
  //   }
  // },

  methods: {
    loadAppointments() {
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
    }
  },

  mounted: function() {

  }
}
</script>

