<template>
    <v-dialog v-model="dialog" width="600">
        <template v-slot:activator="{on}">
            <v-btn depressed class="success" v-on="on">Add new project</v-btn>
        </template>
        <v-card>
                <v-card-title>
                    <h2>Add a new Project</h2>
                </v-card-title>
                <v-card-text>
                    <v-form class="px-3" ref="form"> 
                        <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputrules"></v-text-field>
                        <v-textarea label="information" v-model="content" prepend-icon="mdi-pencil" :rules="inputrules"></v-textarea>

                        <v-menu>
                            <template v-slot:activator="{on}">
                                <v-text-field :rules="inputrules" :value="formattedDate" label="Due Date" prepend-icon="mdi-calendar-month" v-on="on"></v-text-field>
                            </template>
                             <v-date-picker v-model="due"></v-date-picker>
                        </v-menu>

                        <v-btn depressed class="success mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
    </v-dialog>
</template>

<script>
import moment from 'moment'
import db from '../fb'
export default {
    data:()=>({
        title:'',
        content:'',
        due:null,
        inputrules:[
            v=> v.length >= 3 || 'minimum length is 3 characters' 
        ],
        loading: false,
        dialog: false,
    }),
    methods:{
        submit(){
            if(this.$refs.form.validate()){
                this.loading= true;
                const project={
                    title:this.title,
                    content:this.content,
                    due: moment(this.due).format("Do MMMM YYYY"),
                    person: 'kai',
                    status: 'ongoing'
                }

                db.collection('projects').add(project).then(() => {
                    this.loading= false;
                    this.dialog= false;
                    this.$emit('projectAdded');
                })
            }
            
        }
    },
    computed:{
        formattedDate(){
            return this.due ? moment(this.due).format("Do MMMM YYYY"):''
        }
    }
}
</script>