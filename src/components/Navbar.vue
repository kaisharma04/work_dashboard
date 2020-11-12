<template>
    <nav>

        <v-snackbar v-model="snackbar" :timeout="4000" top>
            <span>Awesome! you added a new project</span>
            <v-btn depressed @click="snackbar = false">Close</v-btn>
        </v-snackbar>



        <v-toolbar flat app color="cyan" class="text-uppercase black--text">
            <v-app-bar-nav-icon  class="black--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span class="font-weight-light">S.O.S</span>
                <span>ial</span>
            </v-toolbar-title>
        <v-spacer></v-spacer>
        
      
        <!-- dropdown menu -->

        <v-menu offset-y>
            <template v-slot:activator="{on}">
                <v-btn v-on="on">
                    <v-icon left size="30">mdi-menu-down</v-icon>
                    <span>Menu</span>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-title>{{link.text}}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

    

        <v-btn  color="grey lighten-4"> 
            <span>Sign out</span>
            <v-icon right>mdi-label</v-icon>
        </v-btn>
        </v-toolbar>

        <v-navigation-drawer app temporary v-model="drawer" class="indigo darken-2">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.png">
                    </v-avatar>
                    <p class="white--text subheading mt-1">
                        Kai 
                    </p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <Popup @projectAdded="snackbar = true"/>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-item purple v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup'
export default {
    components:{Popup},
    data(){
        return{
            drawer:false,
            links: [
                    { icon: 'mdi-electron-framework', text: 'Dashboard', route: '/' },
                    { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
                    { icon: 'mdi-account-multiple', text: 'Team', route: '/team' },
                     ],

            snackbar:false,
        }
    }
}
</script>>