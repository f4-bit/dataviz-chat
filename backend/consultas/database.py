import boto3
import os
from models import ConsultaInput

# Conectar con DynamoDB
dynamodb = boto3.resource('dynamodb', region_name="us-east-1")
tabla_consultas = dynamodb.Table("HistorialConsultas")

def guardar_consulta(consulta):
    """
    Guarda la consulta en DynamoDB
    """
    response = tabla_consultas.put_item(Item=consulta)
    return response

def idExiste(id, tipo: str):   
    '''
    Revisa en la base de datos que el id que se va a asignar no exista, debe retornar true o false
    tipo 1 es si es idConsulta
    tipo 2 es si es idConversacion
    '''
    pass

'''
IMPLEMENTAR FUNCIONALIDAD:
Falta conectar con la base de datos en AWS
'''
