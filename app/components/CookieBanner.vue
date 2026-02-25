<script setup>
const { consent, grantConsent, declineConsent } = useConsent()
</script>

<template>
    <div v-if="consent === null" class="cookie-banner">
        <div class="content">
            <p>
                Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site
                conforme nossa <NuxtLink to="/privacidade">Política de Privacidade</NuxtLink>.
            </p>
            <div class="actions">
                <button @click="declineConsent" class="btn-refuse">Recusar</button>
                <button @click="grantConsent" class="btn-accept">Aceitar Tudo</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cookie-banner {
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    background: #03423de5;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    padding: 20px;
    border-radius: 8px;
    z-index: 9999;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

.content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 1200px;
    margin: 0 auto;

    p {
        color: #fff;
    }
    a {
        color: #fff;

        &:hover {
            text-decoration: underline;
            color:rgb(76, 131, 131);
        }
    }
}

.actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

button {
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    font-weight: bold;
}

.btn-accept {
    background: #07e287;
    color: #03250d;
}

.btn-refuse {
    background: #eee;
    color: #666;
}
</style>