<template>
  <footer class="footer">
    <ul class="list">
      <li>Счета</li>
      <li>Категории</li>
      <li>Операции</li>
      <li>Обзор</li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'foot'
}
</script>

<style scoped lang="scss">
  footer.footer {
    position:fixed;
    bottom:50px;
    left:0;
    right:0;
    z-index:1000;
  }

  ul.list {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
</style>