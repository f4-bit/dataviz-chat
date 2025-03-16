from pydantic import BaseModel
from typing import Dict

class ConsultaInput(BaseModel):
    idconsulta: str 
    correo: str
    idconversacion: str
    prompt: str
    fecha: str

class ConsultaOutput(BaseModel):
    input: ConsultaInput.dict
    data: Dict = {
        "respuesta" : str,
        "input_tokens": int,
        "output_tokens": int
    }
