FROM python:3.10
WORKDIR /app
COPY . .
RUN pip install fastapi uvicorn jwt
EXPOSE 8003
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8003"]