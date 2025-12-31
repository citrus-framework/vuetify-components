<script setup lang="ts">
import { computed } from 'vue';

/**
 * 編集可能な文字入力用のインプット
 */
const model = defineModel<string | number | undefined>();
type Props = {
    editable?: boolean,
};
withDefaults(defineProps<Props>(), {
    editable: true,
});
const text = computed(() => {
    if (typeof model.value === 'string') {
        if (model.value.length > 32) {
            return `${model.value.substring(0, 32)}...`;
        }
    }
    return model.value;
});

</script>

<template>
    <v-text-field v-if="editable"
                  v-model="model"
                  v-bind="$attrs"
                  density="compact"
                  hide-details
                  variant="outlined" />
    <p v-if="!editable" v-bind="$attrs">
        {{ text }}
    </p>
</template>

<style scoped lang="scss">

</style>
