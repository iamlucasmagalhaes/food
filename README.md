# food
    Projeto para desenvolvimento de sistemas corporativos

---
## Como executar o projeto
Com python instaldo em sua maquina, na pasta do projeto execute:

#### Passo 1
Crie o ambiente virtual isolado da aplicação: `python3 -m venv .venv`

#### Passo 2

Carregue o ambiente virtual criado.

Caso esteja no Windows:
No terminal digite: `.venv/Scripts/activate`

Caso esteja no Linux:
No terminal digite: `source .venv/bin/activate`

#### Passo 3

Instale as dependencias do projeto com o comando: `pip install -r requirements.txt`


#### Passo 4

Faça as migrations

Caso esteja no Windows:
No terminal digite: `python manage.py makemigrations`
No terminal digite: `python manage.py migrate`

Caso esteja no Linux:
No terminal digite: `python3 manage.py makemigrations`
No terminal digite: `python3 manage.py migrate`

#### Passo 5

Execute o projeto.

Caso esteja no Windows:
No terminal digite: `python manage.py runserver`

Caso esteja no Linux:
No terminal digite: `python3 manage.py runserver`

#### Passo 6

No seu navegador vá até http://localhost:8000


## Como criar um usuario Admin

Caso esteja no Windows:
No terminal digite: `python manage.py createsuperuser`

Caso esteja no Linux:
No terminal digite: `python3 manage.py createsuperuser`

