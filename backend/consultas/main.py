from fastapi import FastAPI
from routes import consultas_routes

app = FastAPI(title="Servicio de Manejo de Consultas")

# Importamos las rutas desde routes.py
app.include_router(consultas_routes, prefix="/consultas")

@app.get("/")
def root():
    return {"message": "Servicio de Consultas en funcionamiento"}
