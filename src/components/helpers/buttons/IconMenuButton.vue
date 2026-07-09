<script setup lang="ts">
type Props = {
    menus: {
        title: string,
        icon: string,
        click(): void | Promise<void>,
    }[],
};
const props = defineProps<Props>();
</script>

<template>
    <v-menu open-on-click>
        <template #activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" density="compact" icon="mdi-dots-horizontal" variant="text" />
        </template>
        <v-list density="compact">
            <v-list-item v-for="menu in props.menus"
                         :key="menu.title"
                         density="compact"
                         :title="menu.title"
                         @click="menu.click" >
                <template #prepend>
                    <v-icon :icon="menu.icon" size="small" />
                </template>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<style scoped lang="scss">

</style>
