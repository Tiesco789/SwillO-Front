<template>
  <div>
    <h1>Entre em contato conosco</h1>
  </div>

  <form class="form-container" action="">
    <label for="">Nome e Sobrenome</label>
    <input type="text" />

    <label for="">Email</label>
    <input type="text" />

    <label for="">Assunto</label>
    <input type="text" />

    <label for="">Descrição</label>
    <textarea name="" id="" cols="30" rows="10"></textarea>

    <button>Enviar Formulário</button>
  </form>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Roboto Slab', serif;
  margin: 48px auto;
  border-bottom: 1px solid #2a2633;
  width: 60%;
  text-align: left;
  font-size: 24px;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 60%;

  input + label {
    margin-top: 20px;
  }

  label {
    margin-bottom: 6px;
  }

  input,
  textarea {
    border-radius: 8px;
    background-color: #2a2633;
    color: white;
    font-size: 16px;
    padding: 16px;
  }

  textarea {
    resize: none;
  }

  button {
    background-color: #e58200;
    border: none;
    border-radius: 4px;
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
</style>
