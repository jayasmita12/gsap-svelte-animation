<script>
	import gsap from 'gsap';
	import SplitText from '$lib/script/gsap/SplitText';
	import ScrollTrigger from '$lib/script/gsap/ScrollTrigger';
	import ScrollSmoother from '$lib/script/gsap/ScrollSmoother';
	import { onMount } from 'svelte';
	onMount(() => {
		gsap.config({ trialWarn: false });
		gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);
		// spliting();
		scroll();
	});
	const scroll = () => {
		let tl = gsap.timeline({
			ScrollTrigger: {
				trigger: '.box2',
				toggleClass: 'someCoolClass',
				toggleActions: 'restart pause resume pause'
			}
		});

		let mySplitText2 = new SplitText('.title2', { type: 'lines' });

		tl.from(mySplitText2.lines, {
			duration: 0.5,
			opacity: 0,
			rotationX: -120,
			force3D: true,
			transformOrigin: 'top center -150',
			stagger: 0.1
		});
		
	};

	// const spliting=()=>{
	// 	let splittext = new SplitText(".title1",{
	// 		type:"words"
	// 	})
	// }

	// var tl;
	// const spliting = () => {
	// 	tl = gsap.timeline();
	// 	var mySplitText1 = new SplitText('#title1', { type: 'words,chars' });
	// 	var chars1 = mySplitText1.chars;

	// 	tl.from(chars1, {
	// 		duration: 0.8,
	// 		opacity: 0,
	// 		scale: 0,
	// 		y: 120,
	// 		rotationX: 180,
	// 		transformOrigin: '0% 50% -50',
	// 		ease: 'back',
	// 		stagger: 0.01
	// 	});

	// 	var tl1 = gsap.timeline();
	// 	var mySplitText2 = new SplitText('#title2', { type: 'lines' });
	// 	var lines2 = mySplitText2.lines;
	// 	gsap.set('#title2', { perspective: 400 });
	// 	tl1.from(lines2, {
	// 		duration: 0.5,
	// 		opacity: 0,
	// 		rotationX: -120,
	// 		force3D: true,
	// 		transformOrigin: 'top center -150',
	// 		stagger: 0.1
	// 	});
	// };
</script>

<div >
	<div
		class="max-w-full h-screen px-20 flex flex-col space-y-5 justify-center items-center bg-slate-500 text-6xl font-bold"
	>
		<div class="box1">
			<div class="title1">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit similique corrupti quasi
				nesciunt? Doloremque, illo maiores. Hic enim possimus sit itaque explicabo et magni natus.
				Ab asperiores sit quidem minima.
			</div>
		</div>
	</div>

	<div
		class=" max-w-full h-screen px-20 flex flex-col space-y-5 justify-center items-center bg-pink-400 text-6xl font-bold"
	>
    <div class="box2">
        <div class="title2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit similique corrupti quasi
            nesciunt? Doloremque, illo maiores. Hic enim possimus sit itaque explicabo et magni natus.
            Ab asperiores sit quidem minima.
        </div>
    </div>
	</div>
</div>
