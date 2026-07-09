<script setup lang="ts">
import { computed } from 'vue';
/**
 * 15分おきの時間選択をするためのコンボボックス
 */
const model = defineModel({ type: String });
type Props = {
    from?: number,
    to?: number,
};
const props = withDefaults(defineProps<Props>(), {
    from: 0,
    to: 27
});

const items = computed(() => {
    const options = [];
    for (let hour = props.from; hour < props.to; hour += 1) {
        for (let minute = 0; minute < 60; minute += 15) {
            options.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
        }
    }
    return options;
});

</script>

<template>
    <v-combobox v-model="model"
                density="compact"
                hide-details
                :items="items"
                :list-props="{
                    density: 'compact',
                }"
                variant="outlined"/>
</template>

<style scoped lang="scss">

</style>
