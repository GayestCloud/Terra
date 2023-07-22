<script setup>
    // If an emit doesn't contain a variable, it's enough to just define its name.
    defineEmits({ popup_visible: undefined });
    // However, f emit contains a variable, it's required to state its type.
    // defineEmits({ popup_visible: Boolean });

    // When using properties we also need to define them and their type.
    // defineProps({ test_prop: String });
</script>

<template>
    <div id="container">
        <div id="top"><logo /></div>
        <div id="middle"><slot /></div>
        <div id="bottom">
            <!-- Emit can either emit a variable, or a signal. Below, it just emits a signal 'popup_visible' -->
            <button @click="$emit('popup_visible')">close</button>
            <!-- It can also emit a variable, like here: -->
            <!-- <button @click="$emit('popup_visible', true)">{{ test_prop }}</button> -->

            <!-- Commented line above also uses a property defined in <script setup> called test_prop.  -->
            <!-- <button @click="$emit('popup_visible', true)">{{ test_prop }}</button> -->
        </div>
    </div>
</template>

<style scoped>
    #container {
        width: 100%;
        max-height: 100vh;
        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        align-content: flex-start;
        
        background-color: #000;

        overflow: hidden;
    }

    #top, #bottom {
        height: 150px;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    #top img {
        /* height: 100px; */
        width: 100%;
        max-width: 267px;
    }

    #middle {
        flex: 1;
        border-color: #fff;
        border-width: 1px;
        border-style: solid;
        width: 100%;
        max-width: 850px;
        padding: 30px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    @media only screen and (max-width: 850px) {
        #middle {
            border-width: 1px 0px;
        }
    }
</style>