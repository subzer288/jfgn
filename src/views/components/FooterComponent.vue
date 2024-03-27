<script setup lang="ts">
    const links = [
        {
          href: 'http://konevaproject.com',
          text: 'Home  ',
        },
        {
          href: 'http://konevaproject.com/about',
          text: 'About Us  ',
        },
        {
          href: 'http://konevaproject.com/blog',
          text: 'Blog  ',
        },
      ]
</script>

<template>
    <v-footer id="footer-component" inset app>
      <v-container>
        <v-row>
          
        </v-row>
        <v-row
          align="center"
          no-gutters
        >
          <v-col
            v-for="(link, i) in links"
            :key="i"
            class="text-center mb-sm-0 mb-5 mx-4"
            cols="auto"
          >
            <a
              :href="link.href"
              class="mr-0 grey--text text--darken-3"
              rel="noopener"
              target="_blank"
              v-text="link.text"
            />
          </v-col>
  
          <v-spacer class="hidden-sm-and-down" />
  
          <v-col cols="12" md="auto">
            <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
              2024, made with
              <v-icon size="18">
                mdi-heart
              </v-icon>
              by <a href="http://konevaproject.com" target="_blank">KonevaProject</a>.
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
</template>

<style lang="sass">
  #footer-component
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
</style>