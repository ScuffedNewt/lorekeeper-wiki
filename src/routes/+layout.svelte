<script>
    import '../app.css'
    import { onNavigate } from '$app/navigation';

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;
        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<div class="container">
    <div class="row col-12">
        <div class="col-lg">
        </div>
        <div class="col-lg-10 bg-light app">
            <div class="main-content p-4">
                <slot></slot>
            </div>
        </div>
        <div class="col-lg">
        </div>
    </div>
</div>