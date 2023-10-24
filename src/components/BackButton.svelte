<button
	class="btn btn-primary ms-auto"
	style="position: fixed; right: 10vw; top: 5vh; width: 10vw; z-index: 1000; filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));"
	on:click={() => window.history.back()}
	on:keydown={(e) => {
		if (e.key == 'Enter') {
			window.history.back();
		}
	}}
>
	Return
</button>
