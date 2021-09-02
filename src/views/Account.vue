<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col class="mt-8 ml-4 mr-4">
          <v-text-field label="用户名" solo></v-text-field>
          <v-text-field label="密码" solo></v-text-field>
          <v-btn
            width="100%"
            class="mt-8"
            large
            depressed
            :loading="loading"
            :disabled="loading"
            @click="loader = 'loading'"
            >登录</v-btn
          >

          <v-checkbox
            label="记住密码"
            v-model="rememberPassword"
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
    loading: false
  }),
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  }
}
</script>
