<script setup>
import Logo from '../logo/Logo.vue';
import HeaderSideBar from './HeaderSideBar.vue';
import Button from './Button.vue'
</script>

<script>
export default {
    name: "SideBar",
    methods: {
        demo() {
            
        },
        selectMenu() {
            // //localStorage.setItem(LocalStorageConstant.CURRENT_MENU, selector);
            // console.log(menu);
            // document.getElementsByClassName('a-tag').addEventListener('click', function(e) {
            //     e.preventDefault();
            //     console.log("...")
            // });
            const demo = document.getElementsByClassName("sidebar-item");
            console.log(demo);
        }
    },
    created() {
        this.demo();
    },
    mounted() {
        this.selectMenu();
    }
};
</script>

<template>
    <!-- Sidebar Start -->
    <aside class="left-sidebar">
        <!-- Sidebar scroll-->
        <div>
            <Logo/>
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
                <ul id="sidebarnav">
                    <HeaderSideBar menuBar="Home" />
                    <Button button="Dashboard" 
                            logo="ti ti-layout-dashboard" 
                            router="/"/>
                    <!-- UI Components -->
                    <HeaderSideBar menuBar="UI COMPONENTS"/>
                    <Button button="Buttons" 
                            logo="ti ti-article"
                            router="/"/>
                    <Button button="Alerts" 
                            logo="ti ti-alert-circle"
                            router="/"/>
                    <Button button="Cards" 
                            logo="ti ti-cards"
                            router="/"/>
                    <Button button="Forms" 
                            logo="ti ti-file-description"
                            router="/"/>
                    <Button button="Typography" 
                            logo="ti ti-typography"
                            router="/"/>
                    <!-- Authentication -->
                    <HeaderSideBar menuBar="AUTH"/>
                    <Button button="Login" 
                            logo="ti ti-login"
                            router="/"/> 
                    <Button button="Register" 
                            logo="ti ti-user-plus"
                            router="/"/>
                    <!--Extra function -->
                    <HeaderSideBar menuBar="EXTRA"/>
                    <Button button="Icons" 
                            logo="ti ti-mood-happy"
                            router="/"/>
                    <Button button="Sample Page" 
                            logo="ti ti-aperture"
                            router="/"/>
                </ul>
            </nav>
            <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
    </aside>  
</template>