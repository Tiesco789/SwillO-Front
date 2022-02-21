<template>
  <h1>Registrar Produto</h1>
  <form @submit.prevent="cadastrarProduto">
    <div class="list-container">
      <select name="products" id="products">
        <option value="hide">Selecione seu produto</option>
        <option value="cerveja">Cerveja</option>
        <option value="caneca">Caneca</option>
        <option value="taça">Taça</option>
      </select>

      <input required type="name" placeholder="Nome*" v-model="products.name" />
      <input
        required
        type="number"
        placeholder="Preço*"
        v-model="products.value"
      />
      <input type="text" placeholder="Tipo" v-model="products.category" />
      <input type="text" placeholder="IBU" v-model="products.ibu" />
      <input type="text" placeholder="Alcool" v-model="products.alcool" />
      <input type="text" placeholder="Imagen" v-model="products.image" />
      <input
        type="text"
        placeholder="Descricao"
        v-model="products.description"
      />

      <!-- <input type="text" placeholder="ºC IDEAL:" /> -->
      <!-- <input type="text" placeholder="Copo Ideal" /> -->

      <!-- <div>
        <label>
          Selecione a imagem
          <input
            class="select-file"
            type="file"
            name="arquivo"
            accept=".png, .jpeg, .jpg"
          />
        </label>
      </div> -->
      <button>Cadastrar Produto</button>
    </div>
  </form>
</template>

<script>
import http from "@/http";
export default {
  setup() {
    return {};
  },
  data: function () {
    return {
      products: {
        name: "",
        value: "",
        description: "",
        image: "",
        ibu: "",
        alcool: "",
        category: "",
      },
    };
  },
  methods: {
    cadastrarProduto() {
      http
        .post("products/create", this.products)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "Home" });
        })
        .catch((erro) => console.log(erro));
    },
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
    font-family: "Inter", sans-serif;
    padding: 8px;
    margin-bottom: 16px;
  }

  input {
    border-radius: 8px;
    background-color: #2a2633;
    color: white;
    font-size: 16px;
    margin: 8px;
    font-family: "Inter", sans-serif;
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
      font-family: "Roboto Slab", serif;
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
    font-family: "Roboto Slab", serif;
    font-weight: 500;
    width: 400px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: lighten($color: #e58200, $amount: 5%);
    }
  }
}
</style>
