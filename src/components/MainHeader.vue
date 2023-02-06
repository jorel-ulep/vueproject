<template>
    <header class="s-center flex justify-between -center max-w-3xl p-5">
        <h1 class="text-xl font-bold">
            <i class="fa-solid fa-cart-shopping"></i> {{ title }}
        </h1>
    </header>
</template>
<script>
    export default {
        name: 'MainHeader',
        props: {
            title: String
        },
        components: {
        },
    }
</script>