<script>
	import gsap from 'gsap';
	import SplitText from '$lib/script/gsap/SplitText';
	import ScrollTrigger from '$lib/script/gsap/ScrollTrigger';
	import ScrollSmoother from "$lib/script/gsap/ScrollSmoother"
	import { onMount } from 'svelte';
	gsap.registerPlugin(SplitText,ScrollTrigger,ScrollSmoother);
	onMount(() => {
		spliting();
		// scroll()
		
		// gsap.from(".title1",{
		// 	opacity:1,
		// 	ScrollTrigger:{
				
		// 		trigger:".title1",
		// 		opacity:0,
		// 		start:"bottom bottom",
		// 		end:"top top",
		// 		scrub:true
		// 	}
		// })
	});

	var tl;
	const spliting = () => {
		tl = gsap.timeline();
		var mySplitText1 = new SplitText('#title1', { type: 'words,chars' });
		var chars1 = mySplitText1.chars;
		gsap.set(chars1, { perspective: 400 });
		tl.from(chars1, {
			duration: 0.8,
			opacity: 0,
			scale: 0,
			y: 120,
			rotationX: 180,
			transformOrigin: '0% 50% -50',
			ease: 'back',
			stagger: 0.01
		});

		var tl1 = gsap.timeline();
		var mySplitText2 = new SplitText('#title2', { type: 'lines' });
		var lines2 = mySplitText2.lines;
		gsap.set(lines2, { perspective: 400 });
		tl1.from(lines2, {
			duration: 0.5,
			opacity: 0,
			rotationX: -120,
			force3D: true,
			transformOrigin: 'top center -150',
			stagger: 0.1
		});
	};

	
</script>
<div >
	<div>
		<div class="max-w-full h-screen px-20 flex flex-col space-y-5 justify-center items-center bg-slate-500 text-6xl font-bold">
		<div class="box1">
			<div id="title1">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit similique corrupti quasi
				nesciunt? Doloremque, illo maiores. Hic enim possimus sit itaque explicabo et magni natus. Ab
				asperiores sit quidem minima.
			</div>
		</div>
		</div>
		
		<div class="max-w-full h-screen px-20 flex flex-col space-y-5 justify-center items-center bg-pink-400 text-6xl font-bold">
			<div id="title2">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit similique corrupti quasi
				nesciunt? Doloremque, illo maiores. Hic enim possimus sit itaque explicabo et magni natus. Ab
				asperiores sit quidem minima.
			</div>
		</div>

	</div>
</div>

