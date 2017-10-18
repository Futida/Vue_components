<template>
  <div>
    <div class="panel panel-info">
      <div class="panel-heading">
        <span class="pull-right">{{ replyComment.date }}</span>
        Answer №: {{ replyComment.ref }}
      </div>
      <div class="panel-body">
        {{ replyComment.comment }}
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
