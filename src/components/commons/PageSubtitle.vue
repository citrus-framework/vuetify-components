<script setup lang="ts">
type Props = {
    title: string,
    description?: string | undefined,
};
const props = defineProps<Props>();
</script>

<template>
    <v-row class="py-2 my-2 border-b-sm">
        <v-col class="text-h5 font-weight-bold" cols="20">
            {{ props.title }}
        </v-col>
        <v-col v-if="props.description" class="text-subtitle-2 text-right" cols="20">
            {{ props.description }}
        </v-col>
    </v-row>
</template>

<style scoped>
</style>
