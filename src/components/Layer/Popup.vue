<template>
  <div class="layer">
    <div class="layer-bg"></div>
    <div class="layer-container">
      <div>
        <div class="layer-content">
          <slot></slot>

          <div class="form-group" style="margin-top: 15px;">
            <button
              class="btn block clouds"
              @click="btnPopupClose()">팝업닫기</button>
          </div>
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
