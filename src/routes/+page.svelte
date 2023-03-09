<script>
	import Dragable from "../lib/components/Draggable/Dragable.svelte";
import Flip from "../lib/components/flip/Flip.svelte";
	import Flip2 from "../lib/components/flip/Flip2.svelte";
	import Flip3 from "../lib/components/flip/Flip3.svelte";
	import MotionPath from "../lib/components/motionPath/MotionPath.svelte";
	import Observer from "../lib/components/observer/Observer.svelte";
	import SplitText from "../lib/components/textsplit/SplitText.svelte";
	import gsap from "gsap";
	import {ScrollTrigger} from "$lib/script/gsap/ScrollTrigger";
	import {ScrollSmoother} from "$lib/script/gsap/ScrollSmoother";
	import {onMount} from "svelte"
	import TypeWritter from "../lib/components/typewritter/TypeWritter.svelte";
	
	onMount(()=>{
		gsap.registerPlugin(ScrollSmoother);
		ScrollSmoother.create({
			wrapper:"#smooth-wrapper",
			content:"#smooth-content",
			smooth:1,
			effects: true,  
			smoothTouch: 0.1,  
		})
	})

</script>
<!-- <Flip/> -->
<!-- <Flip2/> -->
<div id="smooth-wrapper">
	<div id="smooth-content">
		<div>
			<Flip3/>
		</div>
		<div>
			<MotionPath/>
		</div>
		<div>
			<Dragable/>
		</div>
		<div>
			<Observer/>
		</div>
		<div>
			<SplitText/>
		</div>
		<div>
			<TypeWritter/>
		</div>
	</div>
</div>





