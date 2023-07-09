export default class Api {

  loadAppointmentsInfo() {
    return fetch('/petdoctor/enrollment/appointments/all', {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}
