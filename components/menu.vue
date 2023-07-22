<template>
    <div id="menu">
        <slot />
    </div>
</template>

<style scoped>
    #menu {
        width: 100%;
        height: 60px;
        border-color: #fff;
        border-width: 1px;
        border-style: solid;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 30px;
    }

    ::slotted(a) {
        vertical-align: baseline;
    }

    @media only screen and (max-width: 850px) {
        #menu {
            border-width: 1px 0px;
        }
    }
</style>