<script setup lang="ts">
/**
 * 文字入力用のインプット
 */
const model = defineModel<string | number | undefined>();

</script>

<template>
    <v-text-field v-model="model"
                  v-bind="$attrs"
                  density="compact"
                  hide-details
                  variant="outlined" />
</template>

<style scoped lang="scss">

</style>
