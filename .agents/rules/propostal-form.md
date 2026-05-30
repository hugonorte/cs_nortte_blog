---
trigger: manual
---

# Sobre o arquivo Proposal Form

## Componente

O formulário de proposta oficial do site estará contido no componente `ProposalForm`
O formulário deverá ser separado visualmente em sessões para facilitar o preenchimento. Segue abaixo a lista de todos os campos que o formulário deve conter:

1.  ### Dados do cliente

    • **Nome da empresa** - `string obrigatório`

    • **Nome do responsável** - `string obrigatório`

    • **Cargo / função** - `string obrigatório`

    • **E-mail** - `string obrigatório`

    • **Telefone / WhatsApp** - `string obrigatório`

    • **País** - `string obrigatório`

    • **Cidade / Estado** - `string obrigatório`

    • **Site da empresa (opcional)** - `string`

2.  ### Tipo de solicitação

    • **Tipo de demanda** - `[Select Options]`
    - **Novo projeto** - `string option obrigatório`

    - **Ampliação / reforço** - `string option obrigatório`

    - **Revisão de estudo existente** - `string option obrigatório`

    - **Atendimento a exigência de cliente** - `string option obrigatório`
      concessionária / ONS / órgão regulador

    - **Análise de ocorrência / falha / sinistro** - `string option obrigatório`

    - **Desenvolvimento de modelo computacional** - `string option obrigatório`

    - **Consultoria técnica** - `string option obrigatório`

    - **Outros**

      Se o usuário selecionar a opção "Outros", deverá aparecer um campo aberto para que ele possa digitar a descrição.

    **Objetivo da solicitação** string obrigatório [Select Options]
    - **Orçamento preliminar** - `string obrigatório`

    - **Proposta técnica e comercial** - `string obrigatório`

    - **Avaliação de viabilidade** - `string obrigatório`

    - **Apoio em licitação** - `string obrigatório`

    - **Estudo urgente / emergência operacional** - `string obrigatório`

    - **Outros**

    Se o usuário selecionar a opção "Outros", deverá aparecer um campo aberto para que ele possa digitar a descrição.

3.  ### Tipo de estudo elétrico requerido

    `Select options obrigatório`
    - **Fluxo de potência** - `string option obrigatório`

    - **Curto-circuito** - `string option obrigatório`

    - **Coordenação de isolamento** - `string option obrigatório`

    - **Transitórios eletromagnéticos (EMT)** - `string option obrigatório`

    - **Manobra / energização** - `string option obrigatório`

    - **TRV / TRT** - `string option obrigatório`

    - **VFTO / GIS** - `string option obrigatório`

    - **Harmônicos / ressonância** - `string option obrigatório`

    - **Qualidade de energia** - `string option obrigatório`

    - **Ferroressonância** - `string option obrigatório`

    - **SSR / interação eletromecânica** - `string option obrigatório`

    - **Aterramento / toque / passo** - `string option obrigatório`

    - **Indução / interferência eletromagnética** - `string option obrigatório`

    - **Cabos isolados / linhas subterrâneas** - `string option obrigatório`

    - **Subestações** - `string option obrigatório`

    - **Linhas de transmissão** - `string option obrigatório`

    - **Modelos HVDC / FACTS / eletrônica de potência** - `string option obrigatório`

    - **Parques eólicos / solares / BESS** - `string option obrigatório`

    - **Análise de registros reais / pós-falha** - `string option obrigatório`

    - **Avaliação técnica e forense de eventos reais** - `string    option obrigatório`

    - **Outro** (campo aberto) - `string option obrigatório`

    Se o usuário selecionar a opção "Outro", deverá aparecer um campo aberto para que ele possa digitar a descrição.

4.  ### Descrição do empreendimento

    • **Nome do projeto** - `string obrigatório`

    • **Descrição resumida da necessidade** - `string obrigatório`

    • **Localização do empreendimento** - `Select options obrigatório`

    • **Fase do projeto** - `string option obrigatório`
    - **Conceitual** - `string option obrigatório`

    - **Básico** - `string option obrigatório`

    - **Executivo** - `string option obrigatório`

    - **Implantação** - `string option obrigatório`

    - **Comissionamento** - `string option obrigatório`

    - **Pré-operação** - `string option obrigatório`

    - **Operação** - `string option obrigatório`

    - **Pós-ocorrência** - `string option obrigatório`

    - **Resumo do problema ou objetivo técnico** - `string obrigatório`

    `placeholder: Atender requisito normativo, avaliar energização, definir especificação de equipamento, validar desempenho, investigar falha etc.`

5.  ### Dados técnicos principais

    • **Nível de tensão** - `string obrigatório`

    • **Potência / demanda / capacidade instalada** - `string obrigatório`

    • **Tipo de instalação** - `string select options`
    - **LT aérea** - `string obrigatório`
    - **Linha subterrânea** - `string obrigatório`
    - **Subestação AIS** - `string obrigatório`
    - **Subestação GIS** - `string obrigatório`
    - **Usina solar** - `string obrigatório`
    - **Usina eólica** - `string obrigatório`
    - **BESS** - `string obrigatório`
    - **Indústria** - `string obrigatório`
    - **Data center** - `string obrigatório`
    - **Outro** - `string obrigatório`
      Se o usuário selecionar a opção "Outro", deverá aparecer um campo aberto para que ele possa digitar a descrição.

    • **Principais equipamentos envolvidos** - `string obrigatório`
    - **Transformadores** - `string checkbox obrigatório`
    - **Reatores** - `string checkbox obrigatório`
    - **Bancos de capacitores** - `string checkbox obrigatório`
    - **Disjuntores** - `string checkbox obrigatório`
    - **Cabos isolados** - `string checkbox obrigatório`
    - **Conversores** - `string checkbox obrigatório`
    - **Inversores** - `string checkbox obrigatório`
    - **Geradores** - `string checkbox obrigatório`
    - **Compensadores** - `string checkbox obrigatório`
    - **Outros** - `string checkbox obrigatório`
      Se o usuário selecionar a opção "Outro", deverá aparecer um campo aberto para que ele possa digitar a descrição.

    • **Fabricantes / modelos conhecidos (opcional)** - `string obrigatório`

    • **Dados preliminares disponíveis?** `string checkbox obrigatório`
    - **Sim** - `string obrigatório`
    - **Não** - `string obrigatório`

6.  ### Escopo detalhado esperado

    • **O que se espera como entrega?** `Select options obrigatório`
    - **Relatório técnico** - `string checkbox obrigatório`
    - **Memória de cálculo** - `string checkbox obrigatório`
    - **Arquivos de simulação** - `string checkbox obrigatório`
    - **Modelo ATP / PSCAD / PowerFactory / ANAREDE / ANAFAS / ANATEM** - `string checkbox obrigatório`
    - **Parecer técnico** - `string checkbox obrigatório`
    - **Reunião de apresentação** - `string checkbox obrigatório`
    - **Suporte técnico ao cliente final** - `string checkbox obrigatório`
    - **Revisão de documentos de terceiros** - `string checkbox obrigatório`
    - **Especificação técnica** - `string checkbox obrigatório`
    - **Outro** - `string checkbox obrigatório`
      Se o usuário selecionar a opção "Outro", deverá aparecer um campo aberto para que ele possa digitar a descrição.

    • **Necessita ART / RRT / responsabilidade técnica?**
    - **Sim** - `string radio button obrigatório`
    - **Não** - `string radio button obrigatório`

    • **Necessita proposta em português, espanhol ou inglês?**
    - **Português** - `string checkbox obrigatório`
    - **Espanhol** - `string checkbox obrigatório`
    - **Inglês** - `string checkbox obrigatório`

    • **Necessita confidencialidade / NDA?**
    - **Sim** - `string radio button obrigatório`
    - **Não** - `string radio button obrigatório`

    • **Necessita reunião inicial de alinhamento?**
    - **Sim** - `string radio button obrigatório`
    - **Não** - `string radio button obrigatório`

7.  ### Base de dados e documentos disponíveis

    • **Documentos disponíveis para envio** - `[Select Options] obrigatório`
    - **Diagrama unifilar** - `string`
    - **Arranjo físico** - `string`
    - **Memorial descritivo** - `string`
    - **Dados de equipamentos** - `string`
    - **Catálogos** - `string`
    - **Estudos anteriores** - `string`
    - **Oscilografias / registros** - `string`
    - **Base de rede** - `string`
    - **Especificação do cliente** - `string`
    - **Requisitos normativos** - `string`
    - **Outro** - `string`

      **Upload de arquivos** - `string form data opcional`

      **Observações sobre qualidade/completude dos dados** - `string textarea opcional`

8.  ### Prazo e prioridade

    **Essencial para a proposta comercial:**
    - **Prazo desejado para início** - `Date obrigatório`

    - **Prazo desejado para entrega** - `Date obrigatório`

    • **Grau de urgência** - `string obrigatório`
    - **Baixa** - `string radio button obrigatório`

    - **Média** - `string radio button obrigatório`

    - **Alta** - `string radio button obrigatório`

    - **Emergencial** - `string radio button obrigatório`

    • **Existe data crítica contratual ou regulatória?** - `string obrigatório`
    - **Sim** - `string radio button obrigatório`

    - **Não** - `string radio button obrigatório`

    • **Janela para reuniões técnicas** - `string obrigatório`

9.  ### Informações comerciais

• **Tipo de contratação pretendida** - `[Select Options]`

◦ **Preço fechado** - `string option`

◦ **Homem-hora** - `string option`

◦ **Consultoria mensal** - `string option`

◦ **Escopo a definir** - `string option`

• **Necessita proposta técnica + comercial?** - `string obrigatório`

◦ **Sim** - `string radio button obrigatório`

◦ **Não** - `string radio button obrigatório`

• **Necessita cadastro como fornecedor?** - `string obrigatório`

◦ **Sim** - `string radio button obrigatório`

◦ **Não** - `string radio button obrigatório`

• **Empresa final / EPC / fabricante / consultoria / utility / investidor** - `string obrigatório`

10. ### Campo aberto final – como única opção
    • **Mensagem / observações adicionais** - `string textarea opcional`

---

## Fluxo de Submissão (Integração)

Ao finalizar o preenchimento de todos os passos e submeter o formulário, os dados coletados **obrigatoriamente deverão ser salvos no SuiteCRM** através da integração já configurada com a API V8.
- O frontend fará uma chamada para a rota de servidor (Nitro) do Nuxt (ex: `/api/crm-lead`), que utilizará o token de acesso (via `crm-auth.ts`) para injetar os dados como um novo **Lead** (ou módulo correspondente) dentro da plataforma do CRM.
