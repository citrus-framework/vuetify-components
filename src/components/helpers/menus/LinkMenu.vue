<script setup lang="ts">
import { computed } from 'vue';
import type {LinkMenuItem } from '@/types';

/**
 * カスタマイズされたリンクメニュー
 */
type Props = {
    title: string,
    items: LinkMenuItem[],
};
const props = defineProps<Props>();

// グループ毎にまとめる
const groupedItems = computed(() => {
    const result: {title: string, value: string | undefined, type: 'subheader' | 'item'}[] = [];
    let lastGroup = '';

    for (const item of props.items) {
        const group = item.group ?? '';
        if (group !== lastGroup) {
            result.push({ type: 'subheader', title: group ?? '', value: undefined });
            lastGroup = group;
        }
        result.push({ type: 'item', title: item.title, value: item.to });
    }
    console.log(result);
    return result;
});
</script>

<template>
    <v-btn append-icon="mdi-menu-down" density="default" variant="flat">
        {{ props.title }}
        <v-menu activator="parent" open-on-click>
            <v-list base-color="rgb(var(--v-theme-surface))"
                    bg-color="rgb(var(--v-theme-surface-light))"
                    min-width="16em"
                    :items="groupedItems"
            >
                <template #subheader="{ props: properties }">
                    <v-list-subheader v-bind="properties"  class="font-weight-bold text-decoration-underline bg-purple-darken-2" />
                </template>
                <template #item="{ props: properties }">
                    <v-list-item v-bind="properties" :to="properties.value" />
                </template>
            </v-list>
        </v-menu>
    </v-btn>
</template>

<style scoped lang="scss">

</style>
