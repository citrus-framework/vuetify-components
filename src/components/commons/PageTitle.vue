<script setup lang="ts">
type Props = {
    title: string,
};
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
    <v-row class="py-1 border-b-sm">
        <v-col cols="20">
            <h4 class="text-h4 ma-0">{{ props.title }}</h4>
        </v-col>
        <v-col class="text-right" cols="20">
            <slot />
        </v-col>
    </v-row>
</template>

<style scoped>
</style>
