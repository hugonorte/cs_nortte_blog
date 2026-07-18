<script setup lang="ts">
definePageMeta({
    layout: 'home'
});

// const state = reactive({
//   nome: '' as string,
//   sobreNome: '' as string,
//   email: '' as string,
//   dataNascimento: '' as string,
//   telefone: '' as string,
//   cpf: '' as string,
//   assunto: '' as string,
//   mensagem: '' as string,
// })

// type Schema = typeof state

// function validate(state: Partial<Schema>): FormError[] {
//   const errors = []
//   if (!state.nome) errors.push({ name: 'nome', message: 'O nome é um campo obrigatório' })
//   if (state.nome && state.nome.length < 3) errors.push({ name: 'nome', message: 'O nome deve ter pelo menos 3 caracteres' })
//   if (!state.sobreNome) errors.push({ name: 'sobreNome', message: 'O sobrenome é um campo obrigatório' })
//   if (state.sobreNome && state.sobreNome.length < 3) errors.push({ name: 'sobreNome', message: 'O sobrenome deve ter pelo menos 3 caracteres' })
//   if (!state.email) errors.push({ name: 'email', message: 'O email é um campo obrigatório' })
//   if (state.email && !state.email.includes('@')) errors.push({ name: 'email', message: 'O email deve ter pelo menos 3 caracteres' })
//   if (!state.dataNascimento) errors.push({ name: 'dataNascimento', message: 'A data de nascimento é um campo obrigatório' })
//   if (!state.telefone) errors.push({ name: 'telefone', message: 'O telefone é um campo obrigatório' })
//   if (state.telefone && state.telefone.length < 11) errors.push({ name: 'telefone', message: 'O telefone deve ter pelo menos 11 caracteres' })
//   if (!state.cpf) errors.push({ name: 'cpf', message: 'O CPF é um campo obrigatório' })
//   if (state.cpf && state.cpf.length < 11) errors.push({ name: 'cpf', message: 'O CPF deve ter pelo menos 11 caracteres' })
//   if (!state.assunto) errors.push({ name: 'assunto', message: 'O assunto é um campo obrigatório' })
//   if (!state.mensagem) errors.push({ name: 'mensagem', message: 'A mensagem é um campo obrigatório' })
//   return errors
// }

// const submitForm = () => {
//     console.log(state);
// };
</script>

<template>
    <article>
        <h1>Contato</h1>

        <section>
            <h2>Contato</h2>
            <p>
                Para entrar em contato conosco, envie um e-mail preenchenco o formulário abaixo
            </p>
        </section>

        <section>
            <h2>Formulário de Contato</h2>
            <!-- <form @submit.prevent="submitForm">
                <fieldset>
                    <input type="text" placeholder="Nome" v-model="state.nome">
                    <input type="text" placeholder="Sobrenome" v-model="state.sobreNome">
                    <input type="email" placeholder="Email" v-model="state.email">
                    <input type="date" placeholder="Data de nascimento" v-model="state.dataNascimento">
                    <input type="tel" placeholder="Telefone" v-model="state.telefone">
                    <input type="text" placeholder="CPF" v-model="state.cpf">
                    <input type="text" placeholder="Assunto" v-model="state.assunto">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button type="submit">Enviar</button>
                </fieldset>
            </form> -->
        </section>
    </article>
</template>

<style scoped lang="scss">
article {
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem;
    line-height: 1.6;
    color: #333;
}

h1 {
    color: #41694b;
    margin-bottom: 10px;
    font-size: 1.2em;
}

h2 {
    color: #34495e;
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 1em;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 5px;
}

p {
    margin-bottom: 15px;
    text-align: justify;
}

ul {
    margin-left: 20px;
    margin-bottom: 15px;
}

li {
    margin-bottom: 8px;
}

strong {
    color: #2c3e50;
    font-weight: bold;
}

blockquote {
    background: #f9f9f9;
    border-left: 5px solid #3498db;
    margin: 15px 0;
    padding: 10px 20px;
    font-style: italic;
}

@media (max-width: 600px) {
    article {
        padding: 10px;
    }

    h1 {
        font-size: 1.5em;
    }

    h2 {
        font-size: 1.2em;
    }
}
</style>