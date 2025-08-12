# Testes de integração


TRANSACTIONS -> Uma transação é uma sequência de operações que são executadas como uma única unidade, garantindo que todas as operações são realizadas com sucesso ou nenhuma delas é realizada. 
É uma maneira de garantir a consistência dos dados em um banco de dados. Sendo elas, implicitas ou explicitas.

Implíctias: Cada comando que executamos por padrão já é uma transação isolada
Quando executamos um INSERT em uma tabela, a inserção só é realmente salva no banco de dados se todo o comando estiver correto.

Explíctias: Ocorre quando nós indicamos a partir de onde começa esse conjunto de comandos que estarão nessa transação.
ou tudo é salvo no banco de dados ou nada.