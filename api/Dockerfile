FROM python:3.910slim
WORKDIR /app
COPY ./api /app/api
COPY ./requirements.txt /app/requirements.txt
COPY ./.env /app/.env
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r /app/requirements.txt

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]