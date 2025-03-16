from pydantic import BaseModel
from typing import Dict

class ConsultaRequest(BaseModel):
    idconversacion: str
    correo: str
    fecha: str
    prompt: str
    data: Dict = {
        "respuesta" : str,
        "input_tokens": int,
        "output_tokens": int
    }
