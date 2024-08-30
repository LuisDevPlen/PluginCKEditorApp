Documentação CKEditor 5
Visão Geral
Foi integrado o CKEditor 5 em uma página web, permitindo que os usuários
adicionem citações destacadas ao texto do editor através de um botão
personalizado.
Resumo das Etapas
1. Configuração do Projeto:
• Criei um projeto ASP.NET MVC no Visual Studio, escolhendo a
opção "Web Application (Model-View-Controller)".
2. Incluir CKEditor 5:
• Via CDN: Adicionei o CKEditor diretamente através de um CDN
no arquivo de layout.
• Instalação Local: Baixei o CKEditor e incluí os arquivos no meu
projeto, referenciando-os no arquivo de layout.
3. Criar a Página HTML:
• Desenvolvi uma página Razor (Index.cshtml) no diretório
Views/Home.
• Incorporei o CKEditor 5 e adicionei um botão que permite a
inserção de citações com estilização personalizada.
4. Configurar o Controlador:
• Garanti que o HomeController estivesse configurado para
retornar a visão Index.
5. Configuração das Rotas:
• Verifiquei o arquivo Startup.cs para confirmar que as rotas
estavam corretamente configuradas para o controlador e a
ação.
6. Executar a Aplicação:
• Compilei e iniciei o projeto. Acessei a URL padrão
(/Home/Index) para validar a funcionalidade do CKEditor 5 e do
botão de citação.
Observações
• Estilo CSS: Ajustei o estilo das citações conforme necessário e adicionei
lógica ao controlador para manipulação ou validação do conteúdo do
editor.
• Botão de Citação: O botão "Inserir citação" adiciona uma citação com o
HTML definido na variável citationHtml.
• Inclusão do CKEditor: Certifiquei-me de que o CKEditor 5 estava incluído
corretamente na página, seja via CDN ou instalação local. Caso contrário,
o CKEditor não seria inicializado.
• Controlador ASP.NET MVC: O controlador serve a página HTML e é
responsável por renderizar a visão Index.
