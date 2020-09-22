<template>
<div class="navBar">
    <div class="container height-100">
        <div class="row  height-100">
            <ul class="nav nav-tabs height-100 align-items-center" role="tablist">
                <li :class="'nav-item height-100 ' + (index > 0 ? 'mleft-55': '')" v-for="(route, index) in routes" :key="index">
                    <router-link :to="route.href" :class="'nav-link height-58px ' + ($route.path == route.href  ? 'active' : '')" data-index="0" data-toggle="tab" role="tab"><i :class="route.icon"></i> &nbsp; {{route.title}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        props: {
        },
        data(){
            return{
                //hardcoded routes
                routes: [
                    {
                        href: '/',
                        title: 'Overview',
                        icon: 'fas fa-tachometer-alt',
                    },
                    {
                        href: '/corporate-secretary',
                        title: 'Corporate Secretary',
                        icon: 'far fa-building',
                    },
                    {
                        href: '/directors',
                        title: 'Directors',
                        icon: 'fas fa-briefcase',
                    },
                    {
                        href: '/shareholders',
                        title: 'Shareholders',
                        icon: 'fas fa-chart-line',
                    },
                    {
                        href: '/company-timeline',
                        title: 'Company Timeline',
                        icon: 'far fa-calendar-alt',
                    },
                    {
                        href: '/documents',
                        title: 'Documents',
                        icon: 'far fa-folder-open',
                    },
                    {
                        href: '/e-signatures',
                        title: 'eSignatures',
                        icon: 'fas fa-signature',
                    },
                ]
            }
        },
    }
</script>
