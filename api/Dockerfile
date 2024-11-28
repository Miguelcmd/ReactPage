FROM python:3.9-slim

WORKDIR /app

# Copiar los archivos desde el contexto actual
COPY ./requirements.txt /app/requirements.txt
COPY . /app

RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r /app/requirements.txt

EXPOSE 8000

CMD ["uvicorn", "app.api.main:app", "--host", "0.0.0.0", "--port", "8000"]

