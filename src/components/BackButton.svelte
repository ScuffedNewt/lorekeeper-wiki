<button class="btn btn-primary w-25 ms-auto"
    on:click={() => window.history.back()}
    on:keydown={(e) => {
        if (e.key === "Enter") {
            window.history.back();
        }
    }}>
    Return
</button>