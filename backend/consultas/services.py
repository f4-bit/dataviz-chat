import requests
from models import ConsultaRequest

LLM_SERVICE_URL = "http://graficos:8003/"  # URL del servicio de gráficos

def procesar_consulta(consulta: ConsultaRequest):
    """
    Valida la consulta y la envía al servicio de generación de gráficos.
    """

    # Formar la petición para el servicio de gráficos
    payload = consulta.model_dump()

    # Enviar petición al servicio de generación de gráficos
    response = requests.post(f"{LLM_SERVICE_URL}", json=payload)

    if response.status_code == 200:
        return response.json()
    else:
        return {"error": "No se pudo generar el gráfico"}
