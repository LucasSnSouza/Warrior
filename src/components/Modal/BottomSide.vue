<template>
    <div class="modal-login-wrapper flex flex-column y-end" >
        <div class="modal-close-reference w-full h-full" @click.stop="$emit('CloseTrigger', true)">

        </div>
        <div class="modal-login-frame bg-color-brand-one h-3-4 w-full scroll-x">

            <slot/>

        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">

.modal-login-wrapper{
    height: 100vh;
    width: 100vw;
    position: absolute;
    bottom: 0;
    backdrop-filter: blur(var(--scale-brand-xlg));

    .modal-login-frame{
        border-top-left-radius: var(--scale-brand-xlg);
        border-top-right-radius: var(--scale-brand-xlg);
        min-height: 75vh;
    }
}

</style>