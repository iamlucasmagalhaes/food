# Generated by Django 5.1.2 on 2024-10-12 19:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_rename_resumo_pratos_descricao_pratos_preco'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pratos',
            name='linkDaImagem',
            field=models.CharField(default='', max_length=512),
        ),
        migrations.AlterField(
            model_name='pratos',
            name='preco',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=19),
        ),
    ]
