<script>
	import gsap from 'gsap';
	import { Flip } from 'gsap/Flip';
	import { onMount } from 'svelte';
    let root;
	const handleclick = ()=>{
		gsap.registerPlugin(Flip);
        doflip()
	};
   
    const group = root?.querySelector(".group")
	const doflip = () => {
		const state = Flip.getState(".group , .box");

		console.log(state);

		// toggle the flex direction
		group.classList.toggle("reorder");

		Flip.from(state, {
			absolute: true, // uses position: absolute during the flip to work around flexbox challenges
			duration: 1,
			stagger: 0.1,
			ease: 'power1.inOut'
			// you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc.
		});
	};
</script>


	<button class="button bg-gray-400 px-5 py-1 my-10" on:click={handleclick}>change</button>
	<div class="group relative" bind:this={root}>
		<div class="box bg-purple-900 p-5 text-2xl">
			Common "FLIP" techniques employed by other tools won't work with flex elements because of the
			way browsers handle width/height.
		</div>
		<div class="box bg-indigo-700 p-5 text-2xl">
			Simply set <code>absolute: true</code> to have GSAP's Flip plugin make the elements position: absolute
			during the flip to work around challenges with flex and grid layouts.
		</div>
		<div class="box bg-pink-700 p-5 text-2xl">
			When the flip animation is done, elements get reverted back to their normal positioning and
			everything appears seamless.
		</div>
		<div class="box bg-fuchsia-800 p-5 text-2xl">Happy flipping!</div>
	</div>

<style >
    .group{
        display: flex;
        flex-direction: column;
    }
    /* .reorder {
        display: flex;
        flex-direction: row;
        width:50%
    } */
</style>