from fastapi import APIRouter, Depends
from models import ConsultaRequest
from services import procesar_consulta

consultas_routes = APIRouter()

@consultas_routes.post("/")
def recibir_consulta(consulta: ConsultaRequest):
    """
    Recibe la solicitud del usuario y la envía al servicio de generación de gráficos.
    """
    respuesta = procesar_consulta(consulta)
    return respuesta
