"use client"

import { useState } from "react"
import { BarChart, TimerIcon as Timeline, ExpandIcon as Add, Upload, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"

export default function Home() {
  const [open, setOpen] = useState(true)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      content:
        "Hola, soy DataViz. Estoy especializado en crear visualizaciones estadísticas. Puedes cargar tus datos o describirme qué tipo de gráfico necesitas.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [conversations, setConversations] = useState([
    { id: 1, title: "Análisis de ventas trimestrales", timestamp: new Date() },
    { id: 2, title: "Tendencias demográficas 2024", timestamp: new Date() },
    { id: 3, title: "Comparación de rendimiento", timestamp: new Date() },
  ])
  const [showChart, setShowChart] = useState(false)
  const [preferences, setPreferences] = useState({
    autoColors: true,
    showLegend: true,
    animate: true,
    darkMode: false,
  })

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user",
        content: input,
        timestamp: new Date(),
      }
      setMessages([...messages, newMessage])
      setInput("")

      // Simular respuesta de la IA (aquí iría la llamada a la API)
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          sender: "bot",
          content:
            "Estoy procesando tu solicitud. Para crear un gráfico basado en tu petición, necesitaría que me proporciones más datos o que cargues un archivo.",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botResponse])
        setShowChart(true)
      }, 1000)
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* AppBar */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-teal-600 text-white shadow-md">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center font-bold text-xl">
            <BarChart className="mr-2" /> DataViz
          </div>
          <div className="flex items-center">
            <span className="mr-2">Modo oscuro</span>
            <Switch
              checked={preferences.darkMode}
              onCheckedChange={() => setPreferences({ ...preferences, darkMode: !preferences.darkMode })}
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white border-r border-gray-200 pt-16 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="p-4">
          <Button className="w-full mb-4" variant="default">
            <Add className="mr-2 h-4 w-4" /> Nueva Conversación
          </Button>
        </div>

        <div className="px-4 py-2 font-bold text-sm text-gray-500">Conversaciones recientes</div>

        <div className="space-y-1 p-2">
          {conversations.map((convo) => (
            <div key={convo.id} className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Timeline className="h-5 w-5 mr-3 text-gray-500" />
              <div className="overflow-hidden">
                <div className="font-medium truncate">{convo.title}</div>
                <div className="text-xs text-gray-500">{convo.timestamp.toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto p-4 border-t border-gray-200">
          <div className="mb-2 font-bold text-sm text-gray-500">Preferencias de Gráficos</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Colores automáticos</span>
              <Switch
                checked={preferences.autoColors}
                onCheckedChange={() => setPreferences({ ...preferences, autoColors: !preferences.autoColors })}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Mostrar leyenda</span>
              <Switch
                checked={preferences.showLegend}
                onCheckedChange={() => setPreferences({ ...preferences, showLegend: !preferences.showLegend })}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Animaciones</span>
              <Switch
                checked={preferences.animate}
                onCheckedChange={() => setPreferences({ ...preferences, animate: !preferences.animate })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col h-screen pt-16 pl-[280px]">
        {/* Chat history */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex items-start max-w-[70%] ${
                  message.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <Avatar className={`${message.sender === "user" ? "ml-2 bg-purple-500" : "mr-2 bg-teal-600"}`}>
                  <span className="text-white font-semibold">{message.sender === "user" ? "U" : "DV"}</span>
                </Avatar>
                <div
                  className={`p-3 rounded-2xl ${
                    message.sender === "user" ? "bg-teal-100 text-teal-900" : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="text-sm">{message.content}</div>
                  <div className={`text-xs mt-1 ${message.sender === "user" ? "text-teal-700" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Chart preview */}
          {showChart && (
            <div className="my-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="font-bold mb-2">Vista previa del gráfico</div>
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Gráfico de ejemplo"
                className="w-full rounded-lg mb-2"
              />
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Editar
                </Button>
                <Button variant="outline" size="sm">
                  Descargar
                </Button>
                <Button variant="outline" size="sm">
                  Compartir
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <Upload className="h-5 w-5 text-teal-600" />
            </Button>

            <Input
              className="flex-1 mr-2"
              placeholder="Escribe tu mensaje aquí..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
            />

            <Button
              variant="default"
              size="icon"
              onClick={handleSendMessage}
              disabled={!input.trim()}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

