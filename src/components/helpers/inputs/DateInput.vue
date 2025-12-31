<script setup lang="ts">
import { VDateInput } from 'vuetify/labs/VDateInput';
/**
 * 日付入力用のインプット
 */
const model = defineModel<Date | undefined>({ type: Date });

</script>

<template>
    <v-date-input v-model="model"
                  v-bind="$attrs"
                  clearable
                  density="compact"
                  hide-actions
                  hide-details
                  input-format="yyyy-mm-dd"
                  persistent-clear
                  prepend-icon=""
                  variant="outlined" />
</template>

<style scoped lang="scss">

</style>
