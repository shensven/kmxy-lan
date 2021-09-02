<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col class="mt-8 ml-4 mr-4">
          <v-text-field
            label="网关"
            solo
            persistent-hint
            :hint="hintGateway"
            v-model="gateway"
            @keyup.enter="persist"
          ></v-text-field>
          <v-text-field
            label="物理地址"
            solo
            persistent-hint
            :hint="hintMac"
            v-model="mac"
            @keyup.enter="persist"
          ></v-text-field>
          <v-btn width="100%" class="mt-8" large depressed @click="persist"
            >保存</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'Settings',
  data: () => ({
    gateway: '',
    mac: '',
    hintGateway: '',
    hintMac: ''
  }),
  mounted() {
    if (localStorage.gateway) {
      this.hintGateway = localStorage.gateway
    }
    if (localStorage.mac) {
      this.hintMac = localStorage.mac
    }
  },
  watch: {
    // gateway(newGateway) {
    //   localStorage.gateway = newGateway
    // }
  },
  methods: {
    persist() {
      if (this.gateway.length > 0 && this.mac.length > 0) {
        localStorage.gateway = this.gateway
        localStorage.mac = this.mac
        this.hintGateway = this.gateway
        this.hintMac = this.mac
        this.gateway = ''
        this.mac = ''
      } else if (this.gateway.length > 0) {
        localStorage.gateway = this.gateway
        this.hintGateway = this.gateway
        this.gateway = ''
      } else if (this.mac.length > 0) {
        localStorage.mac = this.mac
        this.hintMac = this.mac
        this.mac = ''
      }
    }
  }
}
</script>
