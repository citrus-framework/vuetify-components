<script setup lang="ts">
import { computed } from 'vue';
import { VColorInput } from 'vuetify/labs/VColorInput';

/**
 * 編集可能なカラー入力用のインプット
 */
const model = defineModel<string | undefined>();
type Props = {
    editable?: boolean,
};
withDefaults(defineProps<Props>(), {
    editable: true,
});
defineEmits(['keydown']);
const text = computed(() => {
    return model.value ?? '';
});

</script>

<template>
    <v-color-input v-if="editable"
                   v-model="model"
                   color-pip
                   density="compact"
                   hide-details
                   mode="hex"
                   show-swatches
                   variant="outlined"
                   pip-location="prepend-inner"
                   v-bind="$attrs"/>
    <v-chip v-if="!editable"
            :color="model"
            density="compact"
            prepend-icon="mdi-palette"
            variant="flat">
        {{ text }}
    </v-chip>
</template>

<style scoped lang="scss">

</style>
