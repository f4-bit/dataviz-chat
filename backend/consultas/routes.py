from fastapi import APIRouter, Depends
from models import ConsultaInput
from services import procesar_consulta, id_conversacion

consultas_routes = APIRouter()

@consultas_routes.post("/")
def recibir_consulta(consulta: ConsultaInput):
    """
    Recibe la solicitud del usuario y la envía al servicio de generación de gráficos.
    """
    
    '''
    Se debe recibir:
    (str) idconsulta: null (se le asigna un id en el back) 
    (str) correo: el del usuario
    (str) idconversacion: se crea cuando el usuario crea la conversación
    (str) prompt: el del usuario
    (str) fecha: la pasa el sistema
    '''
    respuesta = procesar_consulta(consulta)
    
    #Retorna un json de tipo ConsultaOutput
    return respuesta

@consultas_routes.post("/")
def crear_conversacion():
    """
    Sucede cuando se crea una nueva conversación
    """
    return id_conversacion()