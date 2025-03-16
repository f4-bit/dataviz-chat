import requests
import secrets
import string
from models import ConsultaInput
from database import idExiste

LLM_SERVICE_URL = "http://graficos:8003/"  # URL del servicio de gráficos

def procesar_consulta(consulta: ConsultaInput):
    """
    Valida la consulta y la envía al servicio de generación de gráficos.
    """
    
    # Asignar un ID único a la consulta
    consulta = asignarId(consulta)
    
    # Formar la petición para el servicio de gráficos
    payload = consulta.model_dump()

    # Enviar petición al servicio de generación de gráficos
    response = requests.post(f"{LLM_SERVICE_URL}", json=payload)

    if response.status_code == 200:
        # Retorna un JSON de tipo ConsultaOutput
        return response.json()
    else:
        return {"error": "No se pudo generar el gráfico"}
    
def asignarId(consulta: ConsultaInput, longitud=12):
    """
    Genera un ID único para la consulta, asegurando que no exista en la base de datos.
    """
    caracteres = string.ascii_letters + string.digits  # Letras y números

    while True:
        id_nuevo = ''.join(secrets.choice(caracteres) for _ in range(longitud))
        
        if not idExiste(id_nuevo, 1):  # Verifica si el ID ya está en la base de datos
            consulta.idconsulta = id_nuevo
            return consulta
        
def id_conversacion():
    """Crea un nuevo id único para cara conversación

    Returns:
        str: id para la conversación
    """
    caracteres = string.ascii_letters + string.digits  # Letras y números

    while True:
        id_nuevo = ''.join(secrets.choice(caracteres) for _ in range(12))
        
        if not idExiste(id_nuevo, 2):  # Verifica si el ID ya está en la base de datos
            return id_nuevo
