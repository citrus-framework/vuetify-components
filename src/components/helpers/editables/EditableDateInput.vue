<script setup lang="ts">
import { computed } from 'vue';
import DateInput from '../inputs/DateInput.vue';

/**
 * 編集可能な日付入力用のインプット
 */
const model = defineModel<Date | undefined>();
type Props = {
    editable?: boolean,
};
withDefaults(defineProps<Props>(), {
    editable: true,
});

const formatDate = (date: Date | undefined, format: string): string => {
    if (!date) return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    return format
        .replace('yyyy', String(year))
        .replace('MM', month)
        .replace('dd', day);
};

const text = computed(() => {
    return formatDate(model.value, 'yyyy-MM-dd');
});

</script>

<template>
    <DateInput v-if="editable" v-model="model" v-bind="$attrs" />
    <p v-if="!editable" v-bind="$attrs">
        {{ text }}
    </p>
</template>

<style scoped lang="scss">

</style>
