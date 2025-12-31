<script setup lang="ts">
type Props = {
    title: string,
};
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
    <v-row class="py-4 border-b-sm">
        <v-col class="text-h4" cols="20">
            {{ props.title }}
        </v-col>
        <v-col class="text-h4 text-right" cols="20">
            <slot />
        </v-col>
    </v-row>
</template>

<style scoped>
</style>
