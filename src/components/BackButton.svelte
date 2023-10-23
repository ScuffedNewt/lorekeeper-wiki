<button
	class="btn btn-primary ms-auto"
	style="position: fixed; right: 10vw; top: 5vh; width: 10vw;"
	on:click={() => window.history.back()}
	on:keydown={(e) => {
		if (e.key == 'Enter') {
			window.history.back();
		}
	}}
>
	Return
</button>
