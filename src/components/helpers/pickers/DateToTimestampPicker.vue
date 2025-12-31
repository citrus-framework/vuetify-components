<script setup lang="ts">
import { ref } from 'vue';
import { VDateInput } from 'vuetify/labs/VDateInput';

/**
 * 日付選択し、内部ではタイムスタンプで選択した日付の00:00:00を保持するピッカー
 */
const model = defineModel({ type: String });

const formatDate = (date: Date, format: string): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return format
        .replace('yyyy', String(year))
        .replace('MM', month)
        .replace('dd', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
};

const innerModel = ref<Date | null>(model.value === '' ? null : new Date(model.value as string));
const updateModel = () => {
    if (innerModel.value) {
        model.value = formatDate(innerModel.value, 'yyyy-MM-dd HH:mm:ss');
    }
};
</script>

<template>
    <v-date-input v-model="innerModel"
                  clearable
                  density="compact"
                  hide-actions
                  hide-details
                  input-format="yyyy-mm-dd"
                  persistent-clear
                  prepend-icon=""
                  variant="outlined"
                  @update:model-value="updateModel"/>
</template>

<style scoped lang="scss">

</style>
