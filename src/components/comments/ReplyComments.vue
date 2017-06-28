<template>
  <div>
    <div class="panel panel-info">
      <div class="panel-heading">
        <span class="pull-right">{{ date }}</span>
        Answer №: {{ replyComment.id }}
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
