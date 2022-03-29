gsap.from(".story", {
    y: -500,
    duration: 2
})
gsap.from(".myimg", {
    // x: 1000,
    scale: 2,
    duration: 1,
    // delay: 1.5
})
gsap.from("#pp", {
    y: 10,
    opacity: 0,
    delay: 2,
    scale: 2,
    yoyo: true,
    duration: 2
})
gsap.to("#ll , #kk", {
    scale: 2,
    duration: 1,
    delay: 1,
    yoyo: true,
    repeat: 1
})
var initialval = 0
function counter() {
    var result = document.getElementById("countspan").getAttribute("data-count")
    // document.getElementById("countspan").innerText = result
    // console.log(result)
    // console.log(initialval)
    if (initialval <= result) {
        document.getElementById("countspan").innerText = initialval
        initialval++
        // counter()
        setInterval(function () { counter() }, 200)
    }
}
counter()