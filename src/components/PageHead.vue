<script setup>
defineProps({ title: String, eyebrow: String, description: String, action: String, to: String })
</script>
<template><header class="page-head"><div><p class="eyebrow">{{ eyebrow }}</p><h1>{{ title }}</h1><p class="subhead">{{ description }}</p></div><RouterLink v-if="action" class="button" :to="to || '/carga'">＋ {{ action }}</RouterLink></header></template>
