<template>
  <div>
    <div class="panel-footer">
      {{ replyComment.id }}
      {{ replyComment.replyComment }}
    </div>
  </div>
</template>

<script>

  export default{
    props: ['replyComment']
  }

</script>

<style></style>
