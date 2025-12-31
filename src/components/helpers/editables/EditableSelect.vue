<script setup lang="ts">
import { computed } from 'vue';
import type { SelectItem } from '../selects/Select.vue';

/**
 * 編集可能なセレクト
 */
const model = defineModel<string | number | undefined>({ required: true });
type Props = {
    items: SelectItem[],
    editable?: boolean,
};
const props = withDefaults(defineProps<Props>(), {
    editable: true,
});

// グループ毎にまとめる
const groupedItems = computed(() => {
    const result: {title: string, value: string | number | undefined, type: 'subheader' | 'item'}[] = [];
    let lastGroup = '';

    for (const item of props.items) {
        const group = item.group ?? '';
        if (group !== lastGroup) {
            result.push({ type: 'subheader', title: group ?? '', value: undefined });
            lastGroup = group;
        }
        result.push({ type: 'item', title: item.title, value: item.value });
    }
    return result;
});

// 表示タイトル
const title = computed(() => {
    const title = props.items.find((item: SelectItem) => {
        return item.value === model.value;
    })?.title ?? '';

    if (title.length > 32) {
        return `${title.substring(0, 32)}...`;
    }
    return title;
});
</script>

<template>
    <v-select v-if="editable"
              v-model="model"
              density="compact"
              hide-details
              item-title="title"
              item-value="value"
              :items="groupedItems"
              :list-props="{
                  density: 'compact',
                  bgColor:'rgb(var(--v-theme-surface-light))',
                  baseColor:'rgb(var(--v-theme-surface))',
              }"
              variant="outlined">
        <template #subheader="{ props: properties }">
            <v-list-subheader v-bind="properties"  class="font-weight-bold text-decoration-underline bg-purple-darken-2" />
        </template>
        <template #item="{ props: properties }">
            <v-list-item v-bind="properties" />
        </template>
    </v-select>
    <p v-if="!editable">
        {{ title }}
    </p>
</template>

<style scoped lang="scss">

</style>
