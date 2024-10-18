from django.db import models

# Create your models here.
class pratos(models.Model):
    linkDaImagem = models.CharField(max_length=512, default="")
    nome = models.CharField(max_length=200, unique=True, default="")
    descricao = models.CharField(max_length=1000, default="")
    preco = models.DecimalField(default=0, max_digits=19, decimal_places=2)


    def __str__(self):
        return self.nome
