<template>
    <div class="cursor" ref="cursorPointer"></div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { gsap, power3 } from 'gsap';
export default {

    name: 'cursor',
    props: {
    },

    setup() {
        const cursorPointer = ref(null);
        onMounted(() => {
            gsap.set(cursorPointer.value, { force3D: true });
            document.addEventListener('mousemove', handleMouseMove);
            document.body.addEventListener('mouseleave', handleMouseLeave);
            document.body.addEventListener('mouseenter', handleMouseEnter);
        });

        function handleMouseMove(e) {
            let x = e.clientX;
            let y = e.clientY;
            gsap.to(cursorPointer.value, {
                x: x - 16,
                y: y - 16,
                ease: 'power3',
            });
        }

        function handleMouseLeave() {
            gsap.to(cursorPointer.value, {
                scale: 0,
                duration: 0.1,
                ease: 'none',
            });
        }

        function handleMouseEnter() {
            gsap.to(cursorPointer.value, {
                scale: 1,
                duration: 0.1,
                ease: 'none',
            });
        }

        let hoverCursors = document.querySelectorAll('[data-cursor="hover"]');

        hoverCursors.forEach(function (cursor) {
            cursor.addEventListener("mouseenter", () => {
                gsap.to(".cursor", {
                scale: 2
                });
            });

            cursor.addEventListener("mouseleave", () => {
                gsap.to(".cursor", {
                scale: 1
                });
            });
        });


        return {
            cursorPointer,
        };
    },
}
</script>
  
<style lang="scss" scoped>
.cursor {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background-color: white;
    mix-blend-mode: difference;
    position: fixed;
    top: 0;
    left: 0;
    will-change: transform;
    pointer-events: none;
}
</style>
  