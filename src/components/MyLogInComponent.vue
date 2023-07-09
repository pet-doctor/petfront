<template>
  <div
    class="flex-column align-content-center"
    style="align-items: center;"
  >
    <h1
      class="text-grey-darken-3"
    >
      Login
    </h1>
    <input
      class="bg-grey-lighten-4"
      type="text"
      name="username"
      v-model="input.username"
      placeholder="Username" />
    <font-awesome-icon icon="fa-solid fa-droplet" />
    <input
      class="bg-grey-lighten-4 border-double mdi-vector-radius"
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Password" />
    <v-btn
      class="text-grey-darken-3 bg-grey-lighten-3"
      @click="login()"
    >
      Login
    </v-btn>
  </div>
  <v-container>

  </v-container>
  <router-view />
</template>

<script>
export default {
  data: () => ({
    name: "LogInComponent",
    text: "default",
    input: {
      username: "",
      password: ""
    },
    mockAccount: {
      username: "aboba",
      password: "a boba"
    },
    authenticated: false
  }),
  methods: {
    login() {
      if (this.input.username !== "" && this.input.password !== "") {
        if (this.input.username === this.mockAccount.username && this.input.password === this.mockAccount.password) {
          this.authenticated = true
          this.router.replace({ name: "Home" });
        } else {
          console.log("The username and (or) password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    },
    logout() {

    }
  }
}
</script>

<style scoped>

</style>
