<template>
  <div>
    <div class="panel panel-info">
      <div class="panel-heading">
        <span class="pull-right">{{ replyComment.date }}</span>
        Answer №: {{ index + 1 }}
      </div>
      <div class="panel-body">
        {{ replyComment.comment }}
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['replyComment', 'date', 'index']
  }

</script>

<style></style>
