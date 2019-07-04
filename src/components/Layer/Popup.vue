<template>
  <div class="layer">
    <div class="layer-bg"></div>
    <div class="layer-container">
      <div>
        <div class="layer-content">
          <slot></slot>
          <button @click="btnPopupClose()">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayerPopup',
  methods: {
    btnPopupClose() {
      this.$emit('toggleLayerPopup')
    }
  }
}
</script>

<style>
.layer { position: fixed; top:0; left:0; width:100%; height:100%; }
.layer > .layer-bg { position: absolute; top: 0; right: 0; bottom: 0; left: 0; background:#000; opacity:.5; }
.layer > .layer-container { display: table; position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.layer > .layer-container > div { display: table-cell; vertical-align: middle; }
.layer > .layer-container > div > .layer-content { padding: 15px; margin: 0 auto; border: 2px solid #fab1a0; background: #fff; width: 500px; }
</style>
