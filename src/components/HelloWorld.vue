<template>
<div ref="container" class="flex-container">
  <div v-tilting="{reverse: true,
	max: 15,
	speed: 400,
	scale: 1.12,
	glare: false,
	reset: true,
	perspective: 500,
	transition: true,
	'max-glare': 0.75,
	'glare-prerender': false,
	gyroscope: true,
	gyroscopeMinAngleX: -45,
	gyroscopeMaxAngleX: 45,
	gyroscopeMinAngleY: -45,
	gyroscopeMaxAngleY: 45}" class="flex-item bg-one">
  <a><span>Welcome </span></a>
</div>
   
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
 created: function(){
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
*,
*::before,
*::after {
	box-sizing: border-box;
}
.flex-container {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: row wrap;
	padding: 3em 1em;

	.flex-item {
		margin: 25px;
		border-radius: 2px;
		padding: 4.5em 5em;
		position: relative;
		a {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
			text-align: center;
			color: #fff;
			font-size: 24px;
			font-weight: normal;
			line-height: 1.5;
			transition: 600ms ease;
			border-radius: 0px;

			span {
				transform: translateZ(50px) scale(0.7);
			}
		}
	}
}

.tilt {
	box-shadow: 0 20px 30px -13px rgba(0, 0, 0, 0.7);
	transform-style: preserve-3d;

	transform: perspective(500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
	&:hover {
		box-shadow: 0 40px 70px -15px rgba(0, 0, 0, 0.7);
	}
}

.bg-one {
  width: 30%;
  height: 30%;
	background: linear-gradient(45deg, rgb(255, 25, 75), rgb(130, 21, 240));
}

.bg-two {
	background: linear-gradient(45deg, rgb(255, 95, 75), rgb(130, 21, 100));
}

</style>