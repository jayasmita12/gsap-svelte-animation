<script>
	import gsap from 'gsap';
	import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
	import { onMount } from 'svelte';
	onMount(() => {
		gsap.registerPlugin(MotionPathPlugin);
      
		gsap.to('#rect', {
			duration: 15,
			repeat: 12,
			repeatDelay: 1,
			yoyo: true,
			ease: 'power1.inOut',
			motionPath: {
				path: '#path',
				align: '#path',
				autoRotate: true,
				alignOrigin: [0.5, 0.5]
			}
		});
	});
</script>

<div class="w-full py-32">

    <center>
        <h1 class="text-xl">MOTION PATH</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.1" stroke="currentColor" class="w-[50%] h-[50%] self-center ">
            <!-- <path stroke-linecap="round" stroke-linejoin="round" id="path" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            <g id="rect" >
                <rect width="1" height="1" fill="none" class="fill-red-500" />
            </g>
        </svg> -->
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" stroke-width="0.1" stroke="currentColor" class="w-[50%] h-[50%] self-center stroke-violet-800 ">
            <path stroke-linecap="round" stroke-linejoin="round" id="path" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            <g id="rect" >
                <rect width="1.7" height="0.2" fill="" class="stroke-pink-500 shadow-2xl fill-pink-500" /> 
            </g>
          </svg>
       
    </center>
      

</div>
