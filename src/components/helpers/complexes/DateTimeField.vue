<script setup lang="ts">
import { ref } from 'vue';
import TimeCombobox from '../comboboxes/TimeCombobox.vue';
import DateInput from '../inputs/DateInput.vue';

/**
 * 日時入力用のフィールド
 */
const model = defineModel<Date | undefined>({ type: Date });

const formatDate = (date: Date | undefined, format: string): string => {
    if (!date) return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');

    return format
        .replace('yyyy', String(year))
        .replace('MM', month)
        .replace('dd', day)
        .replace('HH', hours)
        .replace('mm', minutes);
};

const date = ref<Date | undefined>(model.value);
const time = ref<string>(model.value ? formatDate(model.value, 'HH:mm') : '');

const onChanged = () => {
    model.value = new Date(`${formatDate(date.value, 'yyyy-MM-dd')} ${time.value}:00`);
};
</script>

<template>
    <v-row>
        <v-col cols="24">
            <DateInput v-model="date" @update:model-value="onChanged" />
        </v-col>
        <v-col cols="16">
            <TimeCombobox v-model="time" @update:model-value="onChanged" />
        </v-col>
    </v-row>
</template>

<style scoped lang="scss">

</style>
