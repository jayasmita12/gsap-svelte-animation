<script>
    import gsap from "gsap"
    import { Draggable } from "gsap/Draggable";
	import { onMount } from "svelte";
    onMount(()=>{
        gsap.registerPlugin(Draggable)
        drag()
    })
    const drag=()=>{
        Draggable.create(".img",{
            bounds:"#groups",
            onDrag:function(){
                if(this.hitTest("#bag")){
                    gsap.to(this.target , {duration:1,opacity:0,scale:0})
                }
            }
        })
       
    }
</script>

<div class="max-w-full h-screen flex flex-col space-y-4 justify-center items-center">
    <h1 class="text-xl">DRAGABLE</h1>
    <p class="text-xl font-bold text-green-600">Put the item into the bag</p>
    <div class="bg-black w-[60%] relative h-[50%]" id="groups">
        <div class="text-green-500   p-4" >
            <img src="shop.png"  class="w-28 h-28" id="bag" alt="">
        </div>
        <div class="text-green-500 icon">
            <img src="mc.png" class="w-28 h-28 img absolute right-[20%] top-[10%]" id="orange" alt="">
        </div>
        <div class="text-green-500 icon">
            <img src="bottle.png" class="w-28 h-2w-28 img absolute right-[10%] left-[50%]" id="bottle" alt="">
        </div>
        <div class="text-green-500 icon">
            <img src="hamburger.png" class="w-28 h-2w-28 img absolute right-[10%] bottom-[10%]" id="hamburger" alt="">
        </div>
        <div class="text-green-500 icon">
            <img src="joy-con.png" class="w-28 h-2w-28 img absolute left-[30%] top-[10%]" id="joy-con" alt="">
        </div>
        <div class="text-green-500 icon">
            <img src="fries.png" class="w-28 h-2w-28 img absolute left-[10%] bottom-[10%]" id="fries" alt="">
        </div>
    </div>
</div>