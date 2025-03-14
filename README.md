# Semáforo Interativo com Contador

Este projeto foi desenvolvido como um exemplo prático de manipulação do DOM com JavaScript, CSS e HTML. O objetivo é simular o funcionamento de um semáforo com um contador interativo, onde o contador aparece no centro da luz ativa e muda dinamicamente conforme o tempo passa. O projeto também inclui transições suaves e cores com transparência para o contador, proporcionando uma experiência visual agradável.

## Descrição

O projeto consiste em um semáforo interativo que alterna entre as cores vermelho, amarelo e verde. Cada luz possui um contador que indica quantos segundos faltam para a próxima mudança de cor. O contador aparece no centro da luz ativa e desaparece quando a luz é desligada, reaparecendo na próxima luz que for ativada.

### Melhorias Implementadas

- **Contador Dinâmico**: O contador é exibido no centro da luz ativa e é atualizado em tempo real.
- **Cores com Transparência**: O contador herda a cor da luz ativa com um efeito de transparência, criando um visual harmonioso.
- **Transições Suaves**: As mudanças de cor e a exibição do contador são feitas com transições suaves, melhorando a experiência do usuário.
- **Código Modular**: O JavaScript foi estruturado de forma modular, facilitando a manutenção e a adição de novas funcionalidades.
- **Painel de Controle**: Adicionada uma página de controle para ajustar os tempos de cada luz do semáforo.
- **Estilização Aprimorada**: Melhorias no layout e na usabilidade do painel de controle, com estilos responsivos e botões interativos.

## Novas Atualizações

- **Painel de Controle**:
  - Adicionada a página `panelControl.html` para permitir que o usuário defina os tempos de cada luz do semáforo.
  - Os tempos são armazenados no `localStorage` e aplicados ao semáforo automaticamente.
  - Botões estilizados para uma melhor experiência do usuário.
- **Estilização**:
  - Ajustes no layout do painel de controle, incluindo `flex-direction: column`, `gap: 10px` e `width: 160px`.
  - Novos estilos para o painel de controle:
    - Margem, padding, bordas arredondadas e sombra.
    - Estilos para títulos, labels e inputs.
    - Botões com efeito hover e bordas arredondadas.
- **Lógica Aprimorada**:
  - Verificação da página atual para executar código específico (`panelControl.html` ou `index.html`).
  - Redirecionamento automático para a página do semáforo após salvar os tempos.

## Tecnologias Utilizadas

- **HTML**: Estruturação da página e elementos do semáforo.
- **CSS**: Estilização do semáforo, contador e transições.
- **JavaScript**: Lógica para controle do semáforo e contador dinâmico.

## Estrutura do Projeto

- **index.html**: Estrutura HTML do semáforo.
- **panelControl.html**: Página de controle para ajustar os tempos do semáforo.
- **styles.css**: Estilos CSS para o semáforo, contador e painel de controle.
- **script.js**: Lógica JavaScript para controle do semáforo, contador e painel de controle.

## Funcionalidades

- Alternância automática entre as cores do semáforo (vermelho, amarelo, verde).
- Contador dinâmico que aparece no centro da luz ativa.
- Transições suaves entre as cores e o contador.
- Cores do contador com transparência, correspondentes à luz ativa.
- Painel de controle para ajustar os tempos de cada luz.
- Redirecionamento automático entre as páginas.

## Contribuição

Contribuições são bem-vindas! Se você tiver alguma ideia para melhorar o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Desenvolvido por:

- Juarez Weitzel