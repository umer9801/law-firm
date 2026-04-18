"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Trash2, RefreshCw, LogOut, Mail, Phone, Calendar, Clock, User } from "lucide-react"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [activeTab, setActiveTab] = useState<"contacts" | "consultations">("contacts")
  const [contacts, setContacts] = useState<any[]>([])
  const [consultations, setConsultations] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "admin123") {
      setIsAuthenticated(true)
      fetchData()
    } else {
      alert("Invalid password")
    }
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const [contactsRes, consultationsRes] = await Promise.all([
        fetch(`/api/admin/contacts?auth=admin123`),
        fetch(`/api/admin/consultations?auth=admin123`),
      ])

      const contactsData = await contactsRes.json()
      const consultationsData = await consultationsRes.json()

      setContacts(contactsData.contacts || [])
      setConsultations(consultationsData.consultations || [])
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  const deleteContact = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return

    try {
      await fetch(`/api/admin/contacts/${id}?auth=admin123`, {
        method: "DELETE",
      })
      setContacts(contacts.filter((c) => c._id !== id))
    } catch (error) {
      console.error("Error deleting contact:", error)
    }
  }

  const deleteConsultation = async (id: string) => {
    if (!confirm("Are you sure you want to delete this consultation?")) return

    try {
      await fetch(`/api/admin/consultations/${id}?auth=admin123`, {
        method: "DELETE",
      })
      setConsultations(consultations.filter((c) => c._id !== id))
    } catch (error) {
      console.error("Error deleting consultation:", error)
    }
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/admin/consultations/${id}?auth=admin123`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })
      setConsultations(
        consultations.map((c) => (c._id === id ? { ...c, status } : c))
      )
    } catch (error) {
      console.error("Error updating status:", error)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 shadow-xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogOut className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
            <p className="text-gray-600 text-sm mt-2">Enter password to access dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="h-12"
              />
            </div>
            <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700">
              Login
            </Button>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Prudential Legal Services</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setIsAuthenticated(false)
                setPassword("")
              }}
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-6">
          <Button
            variant={activeTab === "contacts" ? "default" : "outline"}
            onClick={() => setActiveTab("contacts")}
            className="flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contacts ({contacts.length})
          </Button>
          <Button
            variant={activeTab === "consultations" ? "default" : "outline"}
            onClick={() => setActiveTab("consultations")}
            className="flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Consultations ({consultations.length})
          </Button>
          <Button
            variant="outline"
            onClick={fetchData}
            disabled={loading}
            className="flex items-center gap-2 ml-auto"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {activeTab === "contacts" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Form Submissions</h2>
            {contacts.length === 0 ? (
              <Card className="p-8 text-center">
                <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No contacts yet</p>
              </Card>
            ) : (
              <div className="grid gap-4">
                {contacts.map((contact) => (
                  <Card key={contact._id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-800">
                            {contact.firstName} {contact.lastName}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {new Date(contact.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteContact(contact._id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                          {contact.email}
                        </a>
                      </div>
                      {contact.phone && (
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
                            {contact.phone}
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">Subject: {contact.subject}</p>
                      <p className="text-sm text-gray-600">{contact.message}</p>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "consultations" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Consultation Requests</h2>
            {consultations.length === 0 ? (
              <Card className="p-8 text-center">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No consultations yet</p>
              </Card>
            ) : (
              <div className="grid gap-4">
                {consultations.map((consultation) => (
                  <Card key={consultation._id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-800">
                            {consultation.firstName} {consultation.lastName}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {new Date(consultation.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <select
                          value={consultation.status}
                          onChange={(e) => updateStatus(consultation._id, e.target.value)}
                          className="text-xs px-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteConsultation(consultation._id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a href={`mailto:${consultation.email}`} className="text-blue-600 hover:underline">
                          {consultation.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <a href={`tel:${consultation.phone}`} className="text-blue-600 hover:underline">
                          {consultation.phone}
                        </a>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-sm font-medium text-blue-900 mb-2">
                        Service: {consultation.service}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-blue-700">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {consultation.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {consultation.time}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">Case Description:</p>
                      <p className="text-sm text-gray-600">{consultation.description}</p>
                      {consultation.additional && (
                        <>
                          <p className="text-sm font-medium text-gray-700 mt-3 mb-2">Additional Info:</p>
                          <p className="text-sm text-gray-600">{consultation.additional}</p>
                        </>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
