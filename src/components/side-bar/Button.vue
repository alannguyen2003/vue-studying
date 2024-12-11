<script>
// import { LocalStorageConstant } from '../../../constant/local-storage.constant';

export default {
    props: ['button', 'logo', 'router']
}
</script>

<template>
    <li class="sidebar-item">
        <a class="sidebar-link a-tag" :href="[router]" aria-expanded="false">
            <span>
                <i :class="[logo]"></i>
            </span>
            <span class="hide-menu">{{ button }}</span>
        </a>
    </li>
</template>