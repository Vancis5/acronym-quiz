// SSR-safe, zero-dependency HTML5 Canvas Confetti Burst Engine
export function triggerConfettiBurst(count = 60) {
	if (typeof window === 'undefined') return;

	let canvas = document.getElementById('confetti-canvas') as HTMLCanvasElement;
	if (!canvas) {
		canvas = document.createElement('canvas');
		canvas.id = 'confetti-canvas';
		canvas.style.position = 'fixed';
		canvas.style.inset = '0';
		canvas.style.width = '100vw';
		canvas.style.height = '100vh';
		canvas.style.pointerEvents = 'none';
		canvas.style.zIndex = '9999';
		document.body.appendChild(canvas);
	}

	const ctx = canvas.getContext('2d');
	if (!ctx) return;

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const colors = ['#00f2fe', '#7f00ff', '#ff007f', '#ffd700', '#00e676'];
	const particles: Array<{
		x: number;
		y: number;
		vx: number;
		vy: number;
		size: number;
		color: string;
		alpha: number;
		rotation: number;
		vRot: number;
	}> = [];

	const originX = canvas.width / 2;
	const originY = canvas.height * 0.7;

	for (let i = 0; i < count; i++) {
		const angle = (Math.PI * 1.5) + (Math.random() - 0.5) * 1.2;
		const speed = 12 + Math.random() * 16;
		particles.push({
			x: originX,
			y: originY,
			vx: Math.cos(angle) * speed,
			vy: Math.sin(angle) * speed,
			size: 2.5 + Math.random() * 3.5,
			color: colors[Math.floor(Math.random() * colors.length)],
			alpha: 1,
			rotation: Math.random() * Math.PI * 2,
			vRot: (Math.random() - 0.5) * 0.2
		});
	}

	let animationFrame: number;

	function render() {
		if (!ctx || !canvas) return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		let activeCount = 0;
		particles.forEach((p) => {
			if (p.alpha <= 0) return;
			activeCount++;

			p.x += p.vx;
			p.y += p.vy;
			p.vy += 0.45; // Gravity
			p.vx *= 0.98;
			p.alpha -= 0.015;
			p.rotation += p.vRot;

			ctx.save();
			ctx.globalAlpha = Math.max(0, p.alpha);
			ctx.translate(p.x, p.y);
			ctx.rotate(p.rotation);
			ctx.fillStyle = p.color;
			ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
			ctx.restore();
		});

		if (activeCount > 0) {
			animationFrame = requestAnimationFrame(render);
		} else {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	}

	render();
}
