


<script>
    import gsap from "gsap"
    import {Observer} from "gsap/Observer"
	import { onMount } from "svelte";
    onMount(()=>{
        gsap.registerPlugin(Observer)
        observer()
    })
    function rotate(value){
        gsap.to("#arrow",{
            rotate:value + "_short",
            ease:"bake.out",
            duration:0.4,
            overwrite:true,
            transformOrigin:"center center"
        })
    }
    const observer=()=>{
        Observer.create({
            target:"#box",
            type:"wheel , touch,scroll,pointer",
            onUp: () => {rotate(0)},
            onDown: () => {rotate(180)},
            onLeft: () => {rotate(270)},
            onRight: () => {rotate(90)}
        })
    }
</script>


<div class="max-w-full border-2 h-screen flex justify-center bg-black overflow-hidden" id="box">

    <svg viewBox="0 0 284 284">
        <path d="M141.48 268.08c-68.91 0-125.62-56.7-125.62-125.62 0-68.91 56.7-125.62 125.62-125.62 68.91 0 125.62 56.7 125.62 125.62v.01c-.08 68.88-56.74 125.54-125.62 125.61Z" fill="none" stroke="#fff" opacity="1" stroke-width="10"/>
        <g id="arrow" class="arrow" fill-rule="nonzero">
            <path d="M141.48 268.08c-68.91 0-125.62-56.7-125.62-125.62 0-68.91 56.7-125.62 125.62-125.62 68.91 0 125.62 56.7 125.62 125.62v.01c-.08 68.88-56.74 125.54-125.62 125.61Z" fill="#0b0e1e" opacity="0"/>
    <path d="M142.18 122.89V40.83l-14.61 82.06h14.61Z" fill="#60ad30"/>
    <path d="M142.18 122.89V40.83l14.6 82.06h-14.6Z" fill="#8abe23"/>
    <path d="M140.75 169.9h-.01a28.3 28.3 0 0 1-28.17-28.17 28.3 28.3 0 0 1 28.17-28.17 28.3 28.3 0 0 1 28.17 28.17v.01a28.3 28.3 0 0 1-28.16 28.16Z" fill="#60ad30"/>
    <path d="M140.75 156.78c-8.23 0-15-6.77-15-15s6.77-15 15-15 15 6.77 15 15a15.12 15.12 0 0 1-15 15Z" fill="#8abe23"/>
        </g>
       </svg> 
</div>

<style>


</style>