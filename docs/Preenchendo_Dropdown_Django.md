# Preenchendo um Dropdown com Dados de uma Planilha Excel no Django (Sem API)

Este guia descreve como preencher um dropdown no Django com dados provenientes de uma planilha Excel, sem o uso de uma API. O backend processa o arquivo Excel, extrai as informações e as envia diretamente para o frontend.

---

## Passo a Passo

### 1. Instalar Dependências

Para manipular arquivos Excel no backend, utilizaremos a biblioteca **Openpyxl**.

Instale o Openpyxl com o comando:
```bash
pip install openpyxl
```

---

### 2. Configuração do Projeto Django

#### a. Criando o Formulário HTML (Frontend)

Crie um template para o upload do arquivo Excel e para exibir o dropdown preenchido:

```html
<!-- templates/upload.html -->
<form method="POST" enctype="multipart/form-data">
    {% csrf_token %}
    <input type="file" name="excel_file" accept=".xlsx, .xls" />
    <button type="submit">Enviar</button>
</form>

{% if options %}
    <select name="dropdown" id="dropdown">
        {% for option in options %}
            <option value="{{ option.0 }}">{{ option.1 }}</option>
        {% endfor %}
    </select>
{% endif %}
```

---

#### b. Processando o Arquivo Excel no Backend

Crie uma view no Django que recebe o arquivo, lê os dados e os envia para o template.

```python
# views.py
from django.shortcuts import render
from openpyxl import load_workbook

def upload_excel(request):
    options = []

    if request.method == "POST" and request.FILES.get('excel_file'):
        excel_file = request.FILES['excel_file']

        # Carrega o arquivo Excel
        wb = load_workbook(excel_file)
        sheet = wb.active  # Ou use wb['sheet_name'] se souber o nome da planilha

        # Extrai os dados da planilha
        for row in sheet.iter_rows(min_row=2, values_only=True):  # Ignorando cabeçalho
            options.append(row)  # Cada linha deve ter duas colunas: ID e Nome

    return render(request, 'upload.html', {'options': options})
```

---

#### c. Configuração da URL

Adicione a view ao arquivo `urls.py` para que ela esteja acessível.

```python
# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('upload/', views.upload_excel, name='upload_excel'),
]
```

---

### 3. Testando o Processo

1. Acesse `http://localhost:8000/upload/` no navegador.
2. Faça upload de um arquivo Excel.
3. O dropdown será preenchido com os dados extraídos da planilha.

---

### 4. Estrutura da Planilha Excel

A planilha deve conter colunas organizadas da seguinte forma:

| ID | Nome       |
|----|------------|
| 1  | Produto A  |
| 2  | Produto B  |
| 3  | Produto C  |

Com base nesta planilha, o dropdown gerado será:

```html
<select name="dropdown" id="dropdown">
    <option value="1">Produto A</option>
    <option value="2">Produto B</option>
    <option value="3">Produto C</option>
</select>
```

---

### 5. Ajustes Adicionais

- **Validação do Arquivo**: Verifique se o arquivo enviado é um Excel válido antes de processá-lo.
- **Tratamento de Erros**: Exiba mensagens de erro amigáveis caso o formato do arquivo seja incorreto.
- **Campos Adicionais**: Adapte o código para processar outras colunas ou formatos de dados conforme necessário.

---

## Conclusão

Com este fluxo, você pode preencher dinamicamente um dropdown em Django utilizando dados extraídos de uma planilha Excel. É uma solução eficiente para importar e integrar grandes volumes de dados diretamente em sua aplicação sem a necessidade de APIs.

Se precisar de mais ajuda ou quiser aprimorar este processo, não hesite em pedir! 😊
