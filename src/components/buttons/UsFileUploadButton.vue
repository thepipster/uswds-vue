<template>
    <v-row>
        <v-col>
            <v-file-input clerable density="comfortable" variant="underlined" v-model="inputFile" label="File input"></v-file-input>
        </v-col>
        <v-col>
            <v-btn prepend-icon="mdi-account-multiple-plus-outline"  @click="onProcess">Add from CSV</v-btn>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const emit = defineEmits(['update:modelValue', 'uploaded']);
const isUploading = ref<boolean>(false);
const uploadBtn = ref(null);
const acceptType: string = 'image/*'; // application/pdf
const inputFile = ref<File | null>(null);


function onProcess(){

    if (!inputFile.value){
        return;
    }

    isUploading.value = true;

    console.log('onProcess: ', inputFile.value);

    const file = inputFile.value;

    console.log('Processing file: ', file);

    if (typeof FileReader === 'function') {

        const reader = new FileReader();

        reader.onload = (event) => {

            if (!event) {
                alert('Please select a valid file!');
                return
            }

            // Just return the base64 data
            if (event && event.target && event.target.result){
                let data = atob(event.target.result.toString().split(',')[1]);
                console.log('data = ', data, typeof data);
                emit('update:modelValue', data);
                emit('uploaded');
            }

            console.log('Got data for file: ', file.name);

        };

        // TODO: change to binary for efficiency, but requires back-end change
        reader.readAsDataURL(file);

        isUploading.value = false;
    }
    else {
        alert('Sorry, FileReader API not supported');
    }





}



</script>


<style lang="scss">
</style>
