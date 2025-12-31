<script setup lang="ts">
import { computed } from 'vue';

type Props = {
    title: string,
    amount: number,
    isPercent?: boolean,
    isMoney?: boolean,
};
const props = withDefaults(defineProps<Props>(), {
    isPercent: false,
    isMoney: false,
});
const percent = computed(() => props.isPercent ? '%' : '');

const formatNumber = (value: number) => {
    return new Intl.NumberFormat('ja-JP').format(value);
};

const formatMoney = (value: number) => {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(value);
};
</script>

<template>
    <v-card>
        <v-card-title class="text-subtitle-1 font-weight-bold">{{ props.title }}</v-card-title>
        <v-card-text class="text-h5 text-end">
            <template v-if="isMoney">
                {{ formatMoney(props.amount) }}{{ percent }}
            </template>
            <template v-else>
                {{ formatNumber(props.amount) }}{{ percent }}
            </template>
        </v-card-text>
    </v-card>
</template>

<style scoped>
</style>
