# api-intergalactic-travel


## Esse é um projeto de criação de uma API RESTful, utilizando as bibliotecas abaixo:
**express** = Para levantar o servidor da API	

**mongoose** = Para permanencia de dados no banco MongoDb (AWS)

**axios** = Para consumir uma API Externa (SWAPI)

**node-windows** = Para rodar a aplicação através de um servidor do Windows.



## Como utilizar esta API em sua máquina:
1 - Baixe o projeto para seu computador.

2 - Abra o powershell/cmd apontando para a pasta raiz do projeto e execute o comando **"yarn"**, para baixar as dependencias do projeto.

### 3 - Feito isso você pode rodar a aplicação de três formas:

3.1 - Utilizar o comando **"yarn buiid"**, fazendo com que a pasta "dist" seja criada, convertendo os arquivos do TypeScript para Javascript. Após isso, execute o comando "node ./dist/src/install.js" e pronto, a aplicação estará rodando como um serviço do Windows.

3.2 - Após executar o comando **"yarn build"**, executar o comando "node ./dist/src/index.js", para rodar a aplicação através do seu terminal.

3.3 - Utilizar o comando **"yarn dev"** para rodar a aplicação em desenvolvimento


## Rotas disponíveis na API:
**GET** **/people/${id}** - Exemplo: **/people/1**

**GET** **/starships/${id}** - Exemplo: **/starship/9**

**GET** **/vehicles/${id}** - Exemplo: **/vehicles/4**

**GET** **/planets/${id}** - Exemplo: **/planets/1**

**GET** **/species/${id}** - Exemplo: **/species/1**

**GET** **/travels** -  Exemplo: **/travels** (Essa é unica rota que busca dados do mongoDb, as demais buscam diretamente da SWAPI)

**POST** **/travels** -  Exemplo: **/travels** Para esta rota é esperado um json no modelo abaixo:

{
    "pilot": "string",
    "copilot": "string",
    "starship": "string",
    "homePlanet": "string",
    "destionationPlanet": "string"
}

Todos os campos do exemplo acima são obrigatórios, portanto caso algum não seja enviado, a API vai criticar e não gravará os dados.

### Por séculos, em toda Intergalactic travel a espécia Droid foi responsável por garantir a segurança de todas as viagens. Porém, atualmente os Droids não fazem mais isso pois estão se dedicando a algo muito mais promissor, a venda de cafés na STARbucks.

