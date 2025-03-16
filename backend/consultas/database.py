import boto3
import os

# Conectar con DynamoDB
dynamodb = boto3.resource('dynamodb', region_name="us-east-1")
tabla_consultas = dynamodb.Table("HistorialConsultas")

def guardar_consulta(consulta):
    """
    Guarda la consulta en DynamoDB
    """
    response = tabla_consultas.put_item(Item=consulta)
    return response
