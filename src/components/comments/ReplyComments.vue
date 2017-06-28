<template>
  <div>
    <div class="panel panel-info">
      <div class="panel-heading">
        Answer №: {{ replyComment.id }}
        <span class="pull-right"> Date: {{ date }}</span>
      </div>
      <div class="panel-body">
        {{ replyComment.replyComment }}
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['replyComment', 'date']
  }
</script>

<style></style>
