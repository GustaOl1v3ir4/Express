# Testes de integração


TRANSACTIONS -> Uma transação é uma sequência de operações que são executadas como uma única unidade, garantindo que todas as operações são realizadas com sucesso ou nenhuma delas é realizada. 
É uma maneira de garantir a consistência dos dados em um banco de dados. Sendo elas, implicitas ou explicitas.

Implíctias: Cada comando que executamos por padrão já é uma transação isolada
Quando executamos um INSERT em uma tabela, a inserção só é realmente salva no banco de dados se todo o comando estiver correto.

Explíctias: Ocorre quando nós indicamos a partir de onde começa esse conjunto de comandos que estarão nessa transação.
ou tudo é salvo no banco de dados ou nada.


JWT -> É um padrão aberto para representar informações com segurança entre duas partes como um objeto JSON. Ele é comumente usado para autenticação e compartilhamento de informaçõs seguras entre sistemas. 
O JWT é especialmente útil em ambientes distribuidos e em aplicações da web, onde tokens são frequentemente usados para autenticação e autorização

Estrutura JWC: 
 -> header: tipo de token e o algoritmo de hash usado para assinar o token. 
 -> payload: contém as informações ou "reinvidicações" que o token carrega.
 -> assinatura: usada para verificar a integridade dos dados no token.

Bcrypt -> biblioteca de criptografia de senhas usada para proteger senhas armazenadas em banco de dados e, assim aumentar a segurança das credenciais

A principal caracteristica do Bcrypt é sua função de hash de senha segura, que é um algoritmo de hash adaptativo.