<script setup>
const title = ref("TERRA")
const description = ref("TERRA music")

useHead({ 
  title, 
  meta: [
    { 
      name: 'desciption',
      content: description,
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
  ]
})

const news_shown = ref(false);
const info_shown = ref(false);
  // const glupota = ref(false)
</script>

<template>
  <div id="bg">

    <div id="wrap">
      <Logo />
      <Menu>
        <button @click="news_shown = true">news</button>
        <button @click="info_shown = true">info</button>
      </Menu>
      <!-- <a @click="glupota = true">glupota</a> -->
      <!-- @popup_visible executes at (@) signal emition. It then executes code inside quotes. -->
      <Popup v-show="news_shown" @popup_visible="news_shown = false">
        <News />
      </Popup>

      <!-- If we want to use an emitted variable inside @x="", we need to use a lambda function, first parameter of which automatically refers to the variable in this case. -->
      <!-- <Popup v-show="news_shown" test_prop="close" @popup_visible="(v) => news_shown = v"><News/></Popup> -->

      <!-- Unused line also showed above uses a prop to refer to something inside of a component from outside of it. In this case it's test_prop="close". It's very similar to function parameters, but here they are called properties. -->
      <!-- <Popup v-show="news_shown" test_prop="close" @popup_visible="(v) => news_shown = v"><News/></Popup> --><!-- <Popup v-show="news_shown" test_prop="close" @popup_visible="(v) => news_shown = v"><News/></Popup> -->
      <!-- <Popup v-show="glupota" @popup_visible="glupota = false">dwabyuduayw</Popup> -->
      <Popup v-show="info_shown" @popup_visible="info_shown = false">
        <Info />
      </Popup>
      <Links />
    </div>
  </div>
</template>

<style scoped>
#bg {
  min-height: 100%;
  padding-top: env(safe-area-inset-top, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  padding-bottom: env(safe-area-inset-bottom, 0px);
  padding-left: env(safe-area-inset-left, 0px);

  background-color: #000;
  color: #fff;
  font-family: 'JetBrains Mono', monospace;

  display: flex;
  justify-content: center;
  align-items: flex-start;
}

#wrap {
  max-width: 850px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>