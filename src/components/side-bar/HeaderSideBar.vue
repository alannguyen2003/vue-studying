<script>
export default {
    props: ['menuBar']
}
</script>
<template>
    <li class="nav-small-cap">
        <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
        <span class="hide-menu">{{ menuBar }}</span>
    </li>
</template>