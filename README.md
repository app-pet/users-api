# Super App Pet

Desenvolvimento de Users, Back-End para composição do trabalho de Microservices Development.<p>

Back End: <p>
  - [x] Node JS <p>

Cobertura de Testes: <p>
  - [x] Unitários <p>
  - [x] BDD <p>

## Requirementos
```
node, nodemon, .net, docker
```

## Instalação
```
npm install
```
## Run 
```
npm start 
```

## Testes
```
npm run test 
```

## Deploy Docker 
```
docker-compose up
```


### Passo-a-passo para execução dos microsserviços utilizando conteineres docker:

- Clonar o repositório: <br>
> git clone https://github.com/app-pet/docker-compose.git

- Abrir o prompt de comando de sua preferência na pasta na qual o repositório foi clonado e executar os seguintes comandos: <br>
> cd docker-compose <br>
> docker-compose up -d

- Com isso, os microsserviços **users** e **providers** estarão disponíveis nas portas **3000** e **3001**, respectivamente, em seu **localhost**. <br>
> **Users:** http://localhost:3000/api/users <br>
> **Providers:** http://localhost:3001/api/providers

- Swagger
> **Users:** http://localhost:3000/api-docs/ <br>
> **Providers:** http://localhost:3001/api-docs/ <br>


- Para encerrar a execução dos conteineres do projeto, utilize o comando: <br>
> docker-compose down
