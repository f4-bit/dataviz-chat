FROM python:3.10
WORKDIR /app
COPY . .
RUN pip install fastapi uvicorn jwt
EXPOSE 8001
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8001"]