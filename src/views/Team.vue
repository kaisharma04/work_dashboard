<template>
<div class="team">
  <h1 class="subtitle-1">Team rocket</h1>
<v-container class="my-5">
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
        <v-card flat color="grey lighten-3" class="text-center ma-3">
          <v-responsive class="pt-4">
            <v-avatar size="100" class="white">
              <img :src="person.avatar">
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">{{person.name}}</div>
            <div class="grey--text">{{person.role}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn depressed color="grey lighten-3">
              <v-icon small left>mdi-message</v-icon>
              <span>Message</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
</v-container>

</div>
</template>

<script>


export default {
  data:()=>({
    team: [

        { name: 'Kai', role: 'Web developer',avatar:'/avatar-1.png' },

        { name: 'rick', role: 'Graphic designer',avatar:'/avatar-2.png' },

        { name: 'madjack', role: 'Web developer',avatar: '/avatar-3.png'},

        { name: 'shockwave', role: 'Social media maverick',avatar:'/avatar-4.png' },

        { name: 'bojack', role: 'Sales guru',avatar:'/avatar-5.png'}

      ]
  }),
}
</script>
