<template>
  <button class="btn-primary">
    <slot> Click Me </slot>
  </button>
</template>

 

 <style lang="scss" scoped>
    
 
.btn-primary {
    background-color: $color-primary-violet;
    border-radius: .4rem;
    font-size: #{scaleValue(25)};
    color: $color-white;
    cursor: pointer;
    outline: none;
    border: none;
}
</style>
