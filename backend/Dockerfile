#Python 3.11 como base
FROM python:3.11

# Definir el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar solo los archivos necesarios primero (optimiza el cache de Docker)
COPY auth/ auth/
COPY api-gateway/ api-gateway/
COPY consultas/ consultas/
COPY requirements.txt requirements.txt

# Instalar dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Exponer los puertos necesarios
EXPOSE 8000 8001 8002

# Comando de inicio con supervisord para ejecutar varios servicios
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
