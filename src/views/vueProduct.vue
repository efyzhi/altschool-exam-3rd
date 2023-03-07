<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script setup>
    const vueProduct ={
        template: '<div>vueProduct {{ $route.params.id }}</div>',

    }
</script>