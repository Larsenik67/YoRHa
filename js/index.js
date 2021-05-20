<script type='text/javascript'>
    document.getElementById('fullscreen-bg-video').addEventListener('ended', detectEnd, false);

    function detectEnd(e) {
        jQuery('.fullscreen-bg').fadeOut(1000,function(){jQuery(this).remove()})
    }
</script>