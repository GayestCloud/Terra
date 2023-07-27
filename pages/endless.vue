<script setup>
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin);

const title = ref("endless")

useHead({
    title,
    meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
    ]
})

onMounted(() => {
    // FIXME: It's broken on iOS when horizontal LOL
    function duplicateTextToFillPage() {      
        // Get the div #text with entry text and place text inside it into a variable
        let textDiv = document.getElementById('text')
        let text = textDiv.innerHTML

        // Get #text width and height
        let textWidth = textDiv.offsetWidth || 1
        let textHeight = textDiv.offsetHeight || 1

        // Get window width and height
        let screenWidth = window.innerWidth
        let screenHeight = window.innerHeight

        // Calculate how many text repeations are required to fill screen width and how many lines to fill screen height
        let divsToFillScreenWidth = Math.floor(screenWidth / textWidth) || 1
        let divsToFillScreenHeight = Math.ceil(screenHeight / textHeight) || 1

        // Get text-wrap element
        let textWrap = document.getElementById('text-wrap')
                
        // Get line div - clear everything in text-wrap except one line
        let lineDiv = document.getElementsByClassName('line')[0]
        textWrap.replaceChildren(lineDiv);

        // Insert text to line div
        lineDiv.innerHTML = text

        // Append text to line div to fill the width
        for (let step = 0; step <= divsToFillScreenWidth; step++) {
            lineDiv.append(text);
        }

        // Get new text
        let fullText = lineDiv.innerHTML;
        lineDiv.innerHTML = ""

        // Append lines to fill screen height
        for (let step = 0; step <= divsToFillScreenHeight; step++) {
            let newLine = lineDiv.cloneNode(true)
            // newLine.style.marginLeft = '-' + Math.floor(Math.random() * textWidth) + 'px';
            let displace = 'translateX(' + '-' + Math.floor(Math.random() * textWidth) + 'px)'
            newLine.style.transform = displace
            textWrap.appendChild(newLine);
        }

        animate(fullText)
    }

    function animate(text) {
        gsap.to(".line", {duration: 0.4, text: text, ease: "none", stagger: 0.3});
    }

    let wsizew = window.innerWidth;
    let wsizeh = window.innerHeight;
    let tID = undefined;
    window.addEventListener('resize', () => {
        if (tID !== undefined) {
            clearTimeout(tID);
        }

        tID = setTimeout(() => {
            if (wsizew != window.innerWidth || wsizeh != window.innerHeight)
                duplicateTextToFillPage()
            wsizew = window.innerWidth;
            wsizeh = window.innerHeight;
        }, 200);
    });

    duplicateTextToFillPage();
})

</script>

<template>
    <div id="text">there's an endless party at lokum stonewall </div>

    <div id="image-wrap">
        <img :src="'/endless/park.jpg'">
    </div>

    <div id="text-wrap">
        <div class="line"></div>
    </div>

</template>

<style scoped>
* {
    font-family: 'JetBrains Mono', monospace;
    font-size: 16px;
}

#text {
    position: fixed;
    top: 0;
    left: 0;

    width: max-content;
    visibility: hidden;
    white-space: nowrap;

    opacity: 1;
}

#text-wrap {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: calc(100% + 10px);
    margin-top: -10px;

    overflow: hidden;
    white-space: nowrap;

    opacity: 1;

    mix-blend-mode: difference;
    color: #fff;
}

#image-wrap {
    width: 100%;
    height: 100%;

    z-index: -1;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    
    background-color: #000;
}

img {
    width: 680px;
    max-width: 100%;
    max-height: 100%;
    padding: 40px;
}
</style>