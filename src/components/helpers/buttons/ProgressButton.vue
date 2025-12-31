<script setup lang="ts">
import { computed } from 'vue';

/**
 * ボタンにプログレスバーがついたボタン
 */
type Props = {
    title: string,
    prependIcon?: string,
    appendIcon?: string,
    density?: 'default' | 'comfortable' | 'compact',
    variant?: string,
    max: number,
    current: number,
    click(): void | Promise<void>,
};
const props = withDefaults(defineProps<Props>(), {
    appendIcon: undefined,
    prependIcon: undefined,
    density: 'comfortable',
    variant: 'flat'
});

const inProgress = computed(() => {
    return (props.max > 0 && props.current > 0 && props.max !== props.current);
});

const style = computed(() => {
    if (inProgress.value) {
        const percent = (props.current / props.max) * 100;
        return {
            background: `linear-gradient(to right, #00695C ${percent}%, #80CBC4 ${percent}% 100%)`,
        };
    }
    return {
        backgroundColor: '#00695C',
    };
});

const onClick = () => {
    props.click();
};
</script>

<template>
    <v-btn :append-icon="appendIcon"
           :density="density"
           :prepend-icon="prependIcon"
           :style="style"
           @click="onClick">
        {{ title }}
    </v-btn>
</template>

<style scoped lang="scss">

</style>
