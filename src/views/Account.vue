<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col class="mt-8 ml-4 mr-4">
          <v-text-field label="username" dense></v-text-field>
          <v-text-field label="password" dense class="mt-4"></v-text-field>
          <v-btn large depressed width="100%" class="mt-8">Login</v-btn>

          <v-checkbox
            label="Remember password"
            v-model="rememberPassword"
            hide-details
          ></v-checkbox>
          <v-checkbox
            label="Auto Login"
            v-model="autoLogin"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'Account',
  data: () => ({
    rememberPassword: false,
    autoLogin: false
  })
}
</script>
