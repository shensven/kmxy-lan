<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col class="mt-8 ml-4 mr-4">
          <v-text-field label="用户名" solo v-model="username"></v-text-field>
          <v-text-field
            label="密码"
            solo
            v-model="userpwd"
            :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPwd ? 'text' : 'password'"
            @click:append="showPwd = !showPwd"
          ></v-text-field>
          <v-btn
            width="100%"
            class="mt-8"
            large
            depressed
            :loading="loading"
            :disabled="btnDisabled"
            @click="startAuth"
            >登录</v-btn
          >
          <v-checkbox
            label="记住密码"
            hide-details
            v-model="rememberPwd"
            @click="handleRememberPwd"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import appAxios from '@/utils/appAxios'

export default {
  name: 'Account',

  data: () => ({
    username: '',
    userpwd: '',
    showPwd: false,
    btnDisabled: true,
    rememberPwd: false,
    loading: false
  }),

  mounted() {
    this.rememberPwd = localStorage.rememberPwd === '1'
    if (localStorage.username) {
      this.username = localStorage.username
    }
    if (localStorage.userpwd && localStorage.rememberPwd === '1') {
      this.userpwd = localStorage.userpwd
    }
  },

  watch: {
    username() {
      if (this.username.length > 0 && this.userpwd.length > 0) {
        this.btnDisabled = false
      } else {
        this.btnDisabled = true
      }
    },
    userpwd() {
      if (this.username.length > 0 && this.userpwd.length > 0) {
        this.btnDisabled = false
      } else {
        this.btnDisabled = true
      }
    }
  },

  methods: {
    handleRememberPwd() {
      localStorage.rememberPwd = this.rememberPwd === true ? '1' : '0'
    },

    async startAuth() {
      if (this.username.length !== 0 && this.userpwd.length !== 0) {
        localStorage.username = this.username
        if (this.rememberPwd === true) {
          localStorage.userpwd = this.userpwd
        } else {
          localStorage.userpwd = ''
        }
        // 物理地址验证
        await appAxios.get('auth_entry.php', {
          params: {
            authmeth: 3,
            webtype: 0,
            client_mac: localStorage.mac,
            // base64 http://www.qq.com/
            orgi: 'aHR0cDovL3d3dy5xcS5jb20v'
          }
        })
        // 超时验证
        await appAxios.get('login_check_password_ageout.php', {
          params: {
            username: this.username,
            passwd: this.userpwd
          }
        })
        // 登录
        await appAxios.post(
          'cgi-bin/ace_web_auth.cgi',
          `username=${this.username}&userpwd=${this.userpwd}`,
          {
            params: {
              web_jumpto: '',
              orig_referer: 'http://www.qq.com/',
              username: this.username,
              userpwd: this.userpwd,
              login_page: ''
            }
          }
        )
      }
    }
  }
}
</script>
