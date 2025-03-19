import boto3
import os
from models import ConsultaInput
from dotenv import load_dotenv

load_dotenv()

# Conectar con DynamoDB
dynamodb = boto3.resource('dynamodb', region_name="us-east-2")
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

import boto3

def verificar_conexion():
    try:
        # Crear cliente de DynamoDB
        dynamodb = boto3.client('dynamodb', region_name="us-east-2")

        # Intentar listar las tablas
        response = dynamodb.list_tables()
        print("¡Conexión exitosa!")
        print("Tablas disponibles:", response['TableNames'])
    except Exception as e:
        print("Error al conectarse a DynamoDB:", e)

verificar_conexion()
