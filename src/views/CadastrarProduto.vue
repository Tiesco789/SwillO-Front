<template>
  <h1>Registrar Produto</h1>
  <form action="">
    <div class="list-container">
      <select name="products" id="products">
        <option value="hide">Selecione seu produto</option>
        <option value="cerveja">Cerveja</option>
        <option value="caneca">Caneca</option>
        <option value="taça">Taça</option>
      </select>

      <input required type="name" placeholder="Nome*" />
      <input required type="number" placeholder="Preço*" />
      <input required type="number" placeholder="ml*" />
      <input type="text" placeholder="Tipo" />
      <input type="text" placeholder="IBU" />
      <input type="text" placeholder="Alcool" />
      <input type="text" placeholder="ºC IDEAL:" />
      <input type="text" placeholder="Copo Ideal" />

      <div>
        <label>
          Selecione a imagem
          <input
            class="select-file"
            type="file"
            name="arquivo"
            accept=".png, .jpeg, .jpg"
          />
        </label>
      </div>
      <button>Cadastrar Produto</button>
    </div>
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
  text-align: center;
}

.list-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  padding-bottom: 48px;

  h3 {
    margin-bottom: 12px;
  }

  select {
    border-radius: 8px;
    width: 400px;
    height: 40px;
    border: none;
    background-color: #2a2633;
    color: white;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    padding: 8px;
    margin-bottom: 16px;
  }

  input {
    border-radius: 8px;
    background-color: #2a2633;
    color: white;
    font-size: 16px;
    margin: 8px;
    font-family: 'Inter', sans-serif;
    padding: 12px 20px;
    width: 400px;

    &:hover {
      outline: 1px solid #e58200;
    }

    &:focus {
      outline: 1px solid #e58200;
    }
  }

  div {
    label {
      font-family: 'Roboto Slab', serif;
      padding: 10px 20px;
      width: 100%;
      outline: 1px solid #2a2633;
      color: white;
      display: block;
      margin-top: 10px;
      text-align: center;
      cursor: pointer;
      border-radius: 8px;
      width: 400px;
      transition: outline 0.2s ease-in-out;

      &:hover {
        outline: 1px solid #e58200;
      }
    }

    .select-file {
      display: none;
    }
  }

  button {
    background-color: #e58200;
    border-radius: 8px;
    padding: 12px 24px;
    color: black;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin-top: 32px;
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
    font-weight: 500;
    width: 400px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: lighten($color: #e58200, $amount: 5%);
    }
  }
}
</style>
