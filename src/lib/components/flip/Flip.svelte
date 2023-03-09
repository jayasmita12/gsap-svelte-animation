<script>
	import { onMount } from 'svelte';
    import gsap from "gsap"
    import {Flip} from "gsap/Flip"

	onMount(() => {
		gsap.registerPlugin(Flip);
	});
    const squares = gsap.utils.toArray(".square");

    function doFlip() {
  // Get the initial state
  const state = Flip.getState(squares);
  // Make DOM or styling changes (swap the squares in our case)
  swap(squares);
  // Animate from the initial state to the end state
  Flip.from(state, {duration: 2, ease: "power1.inOut"});
}

function swap([a, b]) {
  a.parentNode.children[0] === a ? a.parentNode.appendChild(a) : a.parentNode.appendChild(b);
}

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="max-w-full h-screen flex justify-center items-center bg-slate-400 text-6xl font-bold" on:click={doFlip}>
	<div class="flex justify-between w-full">
		<div class="square w-32 h-32 rounded-lg text-center flex items-center bg-gradient-to-b justify-center from-green-600 to-green-500 text-bold tex-3xl">1</div>
		<div class="square w-32 h-32 rounded-lg text-center flex items-center bg-gradient-to-b justify-center from-green-600 to-green-500 text-bold tex-3xl">2</div>
	</div>
</div>

