<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="presentation">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, autem. Quisquam, distinctio architecto! Libero hic quam unde pariatur corporis est aliquam tenetur tempora impedit dolorem quod esse, quisquam, quis totam harum quo aut mollitia fuga ab inventore voluptas nisi. Recusandae quo facere laboriosam ab, voluptate ipsam. Ad ipsam id repellendus unde perferendis hic eum nostrum distinctio maiores necessitatibus. Facere id voluptas quasi praesentium illo animi quidem obcaecati sit in officiis blanditiis earum recusandae nemo maxime fuga provident cupiditate illum veniam ratione hic dolor nulla, adipisci optio explicabo? Iusto, quasi!</p>

        <img src="@/assets/img/presentation.svg" alt="Apresentação do ibook">
    </div>
</template>



<style lang="scss" scoped>
.presentation {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    @include screen('small', 'medium') {
      grid-template-columns: 1fr;
    }
    p {
      line-height: 26px;
    }
    img {
      max-width: 100%;
    }
  }
</style>