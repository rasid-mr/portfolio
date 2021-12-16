<template>
  <button class="btn-primary">
    <slot> Click Me </slot>
  </button>
</template>
 
<style lang="scss" scoped>
.btn-primary {
  background-color: #f8596d;
  border-radius: 0.4rem;
  font-size: #{scaleValue(25)};
  color:#ebebeb;
  cursor: pointer;
  outline: none;
  border: none;
  text-transform: uppercase;
  height: min-content;
  padding: 0.8rem 0.8rem;
  font-weight: 600;
  width: max-content;
  @include respond(phone) {
    font-size: 1.3rem;
  }

  &:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  }

}


@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
