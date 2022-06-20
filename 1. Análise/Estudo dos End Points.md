# ESTUDO DOS END POINTS - PROVA API

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

**(1° CASO DE USO) => Consultar tabela**

/GET /pets

_response_
```
{
    "id": id,
    "nome": nome
}
```
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


**(2° CASO DE USO) => Inserir pet**

/POST   /pets

_request body_
```
{
    "nome": nome
}
```

_response 200_
```
{
    "nome": nome,
    "id": id
}
```