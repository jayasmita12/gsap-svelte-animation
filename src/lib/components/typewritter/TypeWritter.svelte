<script>
    import gsap from "gsap";
    import { onMount } from "svelte";
	import { TextPlugin } from "gsap/TextPlugin";

	onMount(()=>{
		gsap.registerPlugin(TextPlugin);
		gsap.to("#cursor",{
			opacity:0,
			repeat:-1,
			yoyo:true,
			duration:0.5,
			ease:"power2.inOut"
		})
		
			let tl = gsap.timeline({repeat:-1})
			let tlText = gsap.timeline({repeat:1,yoyo:true,repeatDelay:1.5});
			tlText.to(".title",{duration:2,text:"This is the new text"})
			tl.add(tlText)
		
	})
</script>

<div class="max-w-full bg-red-400  h-screen flex flex-row justify-center items-center">
	<p class="text-5xl   text-center font-bold title"></p>
	<span id="cursor" class="w-1  h-[50px] self-center bg-black"></span>
	
</div>