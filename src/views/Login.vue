<template>
  <div class="login-container">
    <div class="title">
      <h1>Fazer Login</h1>
    </div>
    <form action="">
      <label for="">Email</label>
      <input required type="email" />

      <label for="">Senha</label>
      <input required type="password" />

      <button>Fazer Login</button>
    </form>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  margin: 0 auto;
  background-color: #2a2633;
  padding: 48px;
  width: 44%;
  border-radius: 6px;

  .title {
    padding-bottom: 32px;
    ::after {
      content: '';
      display: block;
      background-color: rgb(56, 53, 65);
      height: 2px;
      width: 100%;
      margin-top: 8px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 500px;

    input {
      border-radius: 8px;
      background-color: #201e27;
      color: white;
      font-size: 16px;
      padding: 16px;

      &:focus {
        outline: 1px solid #e58200;
      }
    }

    input + label {
      margin-top: 20px;
    }

    label {
      margin-bottom: 6px;
    }

    button {
      background-color: #e58200;
      border-radius: 8px;
      padding: 12px 24px;
      color: black;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      margin-top: 20px;
      font-size: 16px;
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
    }
  }
}
</style>
