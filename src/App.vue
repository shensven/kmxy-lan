<template>
  <v-app>
    <v-navigation-drawer
      app
      permanent
      mini-variant
      floating
      color="grey lighten-4"
    >
      <v-list dense nav>
        <v-list-item
          link
          class="force-default-cursor"
          v-for="item in items"
          :key="item.title"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main app>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    items: [
      { title: 'Account', icon: 'mdi-account-circle', route: '/account' },
      { title: 'Settings', icon: 'mdi-cog', route: 'settings' }
    ],
    bottomItem: { title: 'Settings', icon: 'mdi-cog', route: 'settings' },
    right: null
  })
}
</script>
