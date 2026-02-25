export const useConsent = () => {
    const consent = useState<boolean | null>('cookie-consent', () => null)

    // Verifica o localStorage ao montar o app (no cliente)
    onMounted(() => {
        const saved = localStorage.getItem('cookie_consent_granted')
        if (saved !== null) {
            consent.value = saved === 'true'
        }
    })

    const grantConsent = () => {
        consent.value = true
        localStorage.setItem('cookie_consent_granted', 'true')
        // Aqui você dispararia a inicialização do Google Analytics
        window.location.reload() // Recarrega para ativar scripts que dependem do consentimento
    }

    const declineConsent = () => {
        consent.value = false
        localStorage.setItem('cookie_consent_granted', 'false')
    }

    return { consent, grantConsent, declineConsent }
}