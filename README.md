# Frontend para o projeto de teste do Panda Video

## Como rodar a aplicação

### Localmente

Requisitos
- node18
- yarn

Configure um `.env` baseado no `.env.example`
- `yarn dev`

### Produção

Requisitos
- docker
- [Backend](https://github.com/antonio-pbilby/panda-video-backend) rodando
- Acesse a rota `http://localhost:3000`

## Notas sobre o desenvolvimento

### Tecnologias utilizadas
- Vite: ferramenta mais atual para se usar para desenvolvimento de frontend, extremamente performática
- VueJS: minha primeira experiência usando a ferramenta, vindo do React. Gostei mais que React, honestamente
- VueQuery: gerenciamento de estados de requisições, abstração de dados assíncronos para os components
- VueRouter: roteamento recomendado pela documentação do Vue
- Flowbite: componentes em tailwind

### Notas sobre o desenvolvimento
- Minha primeira experiência com vueJs, tive um gargalo no início, mas é uma ferramente mais simples e eficiente que React
- Preciso terminar a tela de detalhes de um vídeo e fazer busca de vídeos
- Quanto a busca de vídeos, tenho duas abordagens que considero em mente:
   - Buscar somente por título, já que a API do Panda Video fornece somente filtragem por título e implementar uma paginação baseada no retorno da API. Abordagem mais performática e que traz os benefícios de performance e usabilidade de paginação, mas perde a usabilidade de poder filtrar em um campo só por título e descrição do vídeo.
   - Trazer os dados do backend com um limite de página alto, para então fazer a filtragem no frontend por título e descrição, e fazer a paginação somente pelo front. Não curto muito essa abordagem, pois perde os benefícios de performance da paginação do backend, mas adiciona a feature de poder pesquisar tanto pelo título quanto pela descrição com somente um campo de pesquisa.
- Quero melhorar a autenticação, da forma que está sendo feita atualmente, eu tenho o controle do estado (`store.userToken`) de forma um pouco descentralizada, altero o estado do localStorage em mais de um canto, creio que isso possa ser melhorado para não ter código espalhado sobre a lógica de autenticação.
- Validação de formulário poderia ser mais complexa, como são campos simples, optei por usar o padrão do html, mas poderia fazer uma validação usando os ref() do build para controle do estado e aplicando a estilização necessária dos erros, ou usar alguma lib de formulários, mas conheço pouco do ecossistema do Vue.
- Apresentar os erros com um componente de pop-up ou toast no lugar de window.alert para ser mais amigável para o usuário.