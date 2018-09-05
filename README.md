# Verificador de números de cartão de crédito v.1.0.0

**Esta biblioteca se destina à validar números de cartões de crédito, para uso em aplicações web.**
A versão atual é capaz de verificar se o número do cartão é válido ou não.


## Os métodos utilizados na biblioteca são:

#### **returnsWritten(num);**

Exemplo de uso:

```
$node
> let verify = require("validCardLib")
> cardValidator(36490102462661); //true
> cardValidator(5293230347111647); //false
```


## versão 1.0.1

- funcionalidades: verifica se o número do cartão é válido ou não.


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install validCardLib`


## roadmap oficial do projeto

#### versão 2.0.0 (previsão outubro/2018)
- implementação da opção de mostrar a bandeira do cartão.

#### versão 1.0.1 (released)
- funcionalidades: verifica se o número do cartão é válido ou não.
