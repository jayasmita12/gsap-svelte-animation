<script>
  import { onMount } from "svelte"; 
  import  gsap from "gsap"
  import  {Flip} from "gsap/Flip"
  import { MotionPathPlugin } from "gsap/MotionPathPlugin";
    let state;
  onMount(()=>{
    gsap.registerPlugin(Flip,MotionPathPlugin)
    change()
})
const change=()=>{
      state = Flip.getState(".target")
      gsap.to(".containers",{x:300})
      gsap.to(".target",{x:-300})
  }
  const fliping = ()=>{
    Flip.fit(".target",".child1",{
        scale:true,
        fitChild:".target",
        duration:2,
        ease:"power1.inOut"
    })
  }
  
</script>

<div class="max-w-lg space-y-5 mx-auto py-10">
    <h1 class="text-xl text-center">FLIP</h1>

    <button class="px-5 py-1 bg-teal-600 rounded-md" on:click={fliping}>Fit</button>
    <div class="border-2 border-red-900 text-center p-5 space-y-3 containers">
        <div class="px-7 py-2 bg-neutral-400 child1">Child1</div>
        <div class="px-7 py-2 bg-neutral-400 child2">Child2</div>
    </div>
    <div class="bg-blue-400 px-8 py-5 mb-10 text-center target">Target</div>
</div>