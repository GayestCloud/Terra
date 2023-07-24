<script setup>
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin);

const title = ref("endless")

useHead({
    title
})

onMounted(() => {
    function duplicateTextToFillPage() {        
        let textDiv = document.getElementsByClassName('text')[0];
        textDiv.innerHTML = "";
        textDiv.classList.add("hidden")

        let text = ["there's", "an", "endless", "party", "going", "on", "at", "lokum", "stonewall"].join(" ").concat(" ")
        textDiv.innerHTML = text;

        let letterWidth = document.getElementsByClassName("text")[0].offsetWidth
        let letterHeight = document.getElementsByClassName("text")[0].offsetHeight
        let screenWidth = document.getElementById("bg")?.offsetWidth
        let screenHeight = document.getElementById("bg")?.offsetHeight
        let divsToFillScreenWidth = Math.floor(screenWidth / letterWidth) + 1
        let divsFillScreenHeight = Math.floor(screenHeight / letterHeight) + 1

        for (let step = 0; step < divsToFillScreenWidth; step++) {
            textDiv.innerHTML += text
        }

        var fullText = document.getElementsByClassName('text')[0].innerText
        textDiv.innerHTML = ""
        textDiv.classList.remove("hidden")

        let bgDiv = document.getElementById('bg')
        let lineDiv = bgDiv?.getElementsByClassName('line')[0]
        lineDiv?.replaceChildren();
        bgDiv?.replaceChildren(lineDiv);

        for (let step = 0; step < divsFillScreenHeight; step++) {
            let clonedLine = lineDiv.cloneNode(true)
            clonedLine.style.marginLeft = '-' + Math.floor(Math.random() * letterWidth) + 'px';
            bgDiv.appendChild(clonedLine)
        }

        animate(fullText, divsFillScreenHeight)
    }

    function animate(text, lines) {
        for (let step = 0; step <= lines; step++) {
            gsap.to(".line", {duration: 0.4, text: text, ease: "none", stagger: 0.3});
        }
    }

    duplicateTextToFillPage()

    window.addEventListener('load', duplicateTextToFillPage);
    window.addEventListener('resize', duplicateTextToFillPage);
})

</script>

<template>
    <div class="testText"></div>
    <div class="text"></div>

    <div id="image-wrap">
        <img :src="'park.jpg'">
    </div>

    <div id="bg">
        <div class="line"></div>
    </div>

</template>

<style scoped>
.line {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    overflow: hidden;
}
.text {
    width: max-content;
    overflow: hidden;
    white-space: nowrap;
}

:deep(.hidden) {
    position: absolute;
    opacity: 0;
}

#bg {
    color: #fff;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    font-family: 'Source Code Pro', monospace;
    font-size: 1.3rem;
    z-index: 1;
    height: calc(100% + 1em * 0.6);
    margin-top: calc(-1em * 0.6);
    mix-blend-mode: difference;
}

#image-wrap {
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    background-color: #000;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    z-index: -1;
}

img {
    width: 680px;
    max-width: 100%;
    max-height: 100%;
    padding: 40px;
}
</style>