<template>
<div class="dashboard" >
  <h1 class="subtitle-1">Dashboard</h1>

  <v-container class="my-5">

      <v-layout class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn class="ma-2" small flat color="grey lighten-3" @click="sortBy('title')" v-on="on">
            <v-icon left small>mdi-folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          </template>
          <span>sort projects by project name</span>
        </v-tooltip>
          
          <v-tooltip top>
            <template v-slot:activator="{on}">
              <v-btn class="ma-2" small flat color="grey lighten-3" @click="sortBy('person')" v-on="on">
            <v-icon left small>mdi-account-box</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
            </template>
            <span>sort projects by person name</span>
          </v-tooltip> 
      </v-layout>

    <v-card flat color="grey lighten-3" v-for="project in projects" :key="project.title">
      <v-row wrap :class="`pa-3 project ${project.status}`">
        <v-col cols="12" md="6">
          <div class="caption grey--text">Project Title</div>
          <div>{{project.title}}</div>
        </v-col>
        <v-col cols="6" sm="4" md="2">
          <div class="caption grey--text">Person</div>
          <div>{{project.person}}</div>
        </v-col>
         <v-col cols="6" sm="4" md="2">
          <div class="caption grey--text">Due by</div>
          <div>{{project.due}}</div>
        </v-col>
         <v-col cols="2" sm="4" md="2">
          <div align="right"> 
            <v-chip small :color="` ${project.status} `" :class="`v-chip--active white--text caption my-2 `" >{{project.status}}</v-chip>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-card>
</v-container>
</div>
</template>

<script>
import db from '../fb'

export default {
  data: ()=>({
      projects: [

       

      ]
  }),
  methods:{
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1:1)
    }
  },

  created(){
    db.collection('projects').onSnapshot(res=> {

        const changes= res.docChanges();

        changes.forEach(change => {
          if(change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id:change.doc.id
            })
          }
        })
    })

  }
}
</script>

<style>
.project.complete{
  border-left:4px solid #3cd1c2;
}
.project.ongoing{
  border-left:4px solid orange;
}
.project.overdue{
  border-left:4px solid tomato;
}
 .v-card{

    word-break: normal;

  }
.v-chip.ongoing {
    background: #fed330;
  }
.v-chip.complete {
    background: #3cd1c2;
  }
.v-chip.overdue {
    background: #fc5c65;
  }
</style>