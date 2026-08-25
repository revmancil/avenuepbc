
'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { toast } from 'sonner'
import { Calendar, Plus, Pencil, Trash2, ArrowLeft, Image as ImageIcon, Archive, ArchiveRestore } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'

interface Event {
  id: string
  title: string
  description: string | null
  startDate: string
  endDate: string | null
  location: string | null
  imageUrl: string | null
  category: string
  isActive: boolean
  showInSlider: boolean
  archived: boolean
}

export default function AdminEventsPage() {
  const { data: session, status } = useSession() || {}
  const router = useRouter()
  const [activeEvents, setActiveEvents] = useState<Event[]>([])
  const [archivedEvents, setArchivedEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [showArchived, setShowArchived] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    category: 'service',
    isActive: true,
    showInSlider: false,
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    } else if (status === 'authenticated') {
      fetchEvents()
    }
  }, [status, router])

  const fetchEvents = async () => {
    try {
      // Fetch active events
      const activeResponse = await fetch('/api/admin/events?archived=false')
      const activeData = await activeResponse.json()
      setActiveEvents(activeData)

      // Fetch archived events
      const archivedResponse = await fetch('/api/admin/events?archived=true')
      const archivedData = await archivedResponse.json()
      setArchivedEvents(archivedData)
    } catch (error) {
      toast.error('Failed to fetch events')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Validate dates
      if (!formData.startDate) {
        toast.error('Start date is required')
        setSubmitting(false)
        return
      }

      // Convert datetime-local format to ISO string for the API
      // datetime-local gives us a string like "2025-12-07T10:00" without timezone
      // We need to treat this as Central Time (America/Chicago) for Dallas, TX
      // The datetime-local value is already in the user's intended timezone, so we just convert to ISO
      const startDateISO = new Date(formData.startDate).toISOString()
      const endDateISO = formData.endDate ? new Date(formData.endDate).toISOString() : null

      console.log('Submitting dates (will be stored in UTC, displayed in CT):', { 
        original: { start: formData.startDate, end: formData.endDate },
        iso: { startDateISO, endDateISO }
      })

      const formDataToSend = new FormData()
      formDataToSend.append('title', formData.title)
      formDataToSend.append('description', formData.description)
      formDataToSend.append('startDate', startDateISO)
      if (endDateISO) formDataToSend.append('endDate', endDateISO)
      if (formData.location) formDataToSend.append('location', formData.location)
      formDataToSend.append('category', formData.category)
      formDataToSend.append('isActive', formData.isActive.toString())
      formDataToSend.append('showInSlider', formData.showInSlider.toString())
      if (imageFile) formDataToSend.append('image', imageFile)

      const url = editingEvent
        ? `/api/admin/events/${editingEvent.id}`
        : '/api/admin/events'
      const method = editingEvent ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        body: formDataToSend,
      })

      if (!response.ok) throw new Error('Failed to save event')

      toast.success(editingEvent ? 'Event updated successfully' : 'Event created successfully')
      setDialogOpen(false)
      resetForm()
      fetchEvents()
    } catch (error) {
      console.error('Error saving event:', error)
      toast.error('Failed to save event')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return

    try {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Failed to delete event')

      toast.success('Event deleted successfully')
      fetchEvents()
    } catch (error) {
      toast.error('Failed to delete event')
    }
  }

  const handleToggleArchive = async (id: string, currentArchived: boolean) => {
    const action = currentArchived ? 'unarchive' : 'archive'
    if (!confirm(`Are you sure you want to ${action} this event?`)) return

    try {
      const response = await fetch(`/api/admin/events/${id}/archive`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ archived: !currentArchived }),
      })

      if (!response.ok) throw new Error(`Failed to ${action} event`)

      toast.success(`Event ${action}d successfully`)
      fetchEvents()
    } catch (error) {
      toast.error(`Failed to ${action} event`)
    }
  }

  const handleEdit = (event: Event) => {
    setEditingEvent(event)
    
    // Format dates for datetime-local input (requires local timezone format)
    const formatDateForInput = (dateString: string | null) => {
      if (!dateString) return ''
      try {
        const date = new Date(dateString)
        // Get local time components
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')
        const formatted = `${year}-${month}-${day}T${hours}:${minutes}`
        console.log('Formatting date:', { input: dateString, output: formatted })
        return formatted
      } catch (e) {
        console.error('Error formatting date:', e)
        return ''
      }
    }
    
    const formattedData = {
      title: event.title,
      description: event.description || '',
      startDate: formatDateForInput(event.startDate),
      endDate: formatDateForInput(event.endDate),
      location: event.location || '',
      category: event.category,
      isActive: event.isActive,
      showInSlider: event.showInSlider,
    }
    
    console.log('Loading event for editing:', formattedData)
    setFormData(formattedData)
    setDialogOpen(true)
  }

  const resetForm = () => {
    setEditingEvent(null)
    setFormData({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      location: '',
      category: 'service',
      isActive: true,
      showInSlider: false,
    })
    setImageFile(null)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
    resetForm()
  }

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#800000]"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Manage Events</h1>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#800000] hover:bg-[#6b0000] text-white" onClick={resetForm}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingEvent ? 'Edit Event' : 'Add New Event'}
                  </DialogTitle>
                  <DialogDescription>
                    {editingEvent
                      ? 'Update the event information below'
                      : 'Fill in the details to create a new event'}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Start Date & Time *</Label>
                      <Input
                        id="startDate"
                        type="datetime-local"
                        value={formData.startDate}
                        onChange={(e) => {
                          console.log('Start date changed:', e.target.value)
                          setFormData({ ...formData, startDate: e.target.value })
                        }}
                        className="cursor-pointer"
                        required
                      />
                      <p className="text-xs text-gray-500">Click to select date and time</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="endDate">End Date & Time</Label>
                      <Input
                        id="endDate"
                        type="datetime-local"
                        value={formData.endDate}
                        onChange={(e) => {
                          console.log('End date changed:', e.target.value)
                          setFormData({ ...formData, endDate: e.target.value })
                        }}
                        className="cursor-pointer"
                      />
                      <p className="text-xs text-gray-500">Optional - leave blank if same as start</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        setFormData({ ...formData, category: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="fellowship">Fellowship</SelectItem>
                        <SelectItem value="outreach">Outreach</SelectItem>
                        <SelectItem value="special">Special</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Event Image</Label>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isActive"
                      checked={formData.isActive}
                      onChange={(e) =>
                        setFormData({ ...formData, isActive: e.target.checked })
                      }
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="isActive" className="cursor-pointer">
                      Active
                    </Label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="showInSlider"
                      checked={formData.showInSlider}
                      onChange={(e) =>
                        setFormData({ ...formData, showInSlider: e.target.checked })
                      }
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="showInSlider" className="cursor-pointer">
                      Show in Featured Events Slider
                    </Label>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleDialogClose}
                      disabled={submitting}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-[#800000] hover:bg-[#6b0000] text-white"
                      disabled={submitting}
                    >
                      {submitting
                        ? 'Saving...'
                        : editingEvent
                        ? 'Update Event'
                        : 'Create Event'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Active Events Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Active Events</h2>
            <span className="text-sm text-gray-600">
              {activeEvents.length} {activeEvents.length === 1 ? 'event' : 'events'}
            </span>
          </div>
          {activeEvents.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Calendar className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-600 text-center">
                  No active events yet. Click &quot;Add Event&quot; to create one.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeEvents.map((event) => (
                <Card key={event.id}>
                  {event.imageUrl && (
                    <div className="relative w-full h-48 bg-gray-100">
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {event.showInSlider && (
                        <div className="absolute top-2 right-2">
                          <span className="bg-[#800000] text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                            <ImageIcon className="h-3 w-3" />
                            In Slider
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <span className="line-clamp-1">{event.title}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          event.isActive
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {event.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </CardTitle>
                    <CardDescription>
                      {format(new Date(event.startDate), 'MMM dd, yyyy h:mm a')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {event.description && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {event.description}
                      </p>
                    )}
                    {event.location && (
                      <p className="text-xs text-gray-500 mb-4">{event.location}</p>
                    )}
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(event)}
                        className="flex-1"
                      >
                        <Pencil className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleToggleArchive(event.id, event.archived)}
                        className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                        title="Archive event"
                      >
                        <Archive className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(event.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Archived Events Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-700">
              Archived Events
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {archivedEvents.length} {archivedEvents.length === 1 ? 'event' : 'events'}
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowArchived(!showArchived)}
              >
                {showArchived ? 'Hide' : 'Show'} Archived
              </Button>
            </div>
          </div>
          {showArchived && (
            <>
              {archivedEvents.length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Archive className="h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-600 text-center">
                      No archived events.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {archivedEvents.map((event) => (
                    <Card key={event.id} className="opacity-75">
                      {event.imageUrl && (
                        <div className="relative w-full h-48 bg-gray-100">
                          <Image
                            src={event.imageUrl}
                            alt={event.title}
                            fill
                            className="object-cover grayscale"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute top-2 right-2">
                            <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                              <Archive className="h-3 w-3" />
                              Archived
                            </span>
                          </div>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="flex items-start justify-between">
                          <span className="line-clamp-1 text-gray-700">{event.title}</span>
                        </CardTitle>
                        <CardDescription>
                          {format(new Date(event.startDate), 'MMM dd, yyyy h:mm a')}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {event.description && (
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {event.description}
                          </p>
                        )}
                        {event.location && (
                          <p className="text-xs text-gray-500 mb-4">{event.location}</p>
                        )}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleToggleArchive(event.id, event.archived)}
                            className="flex-1 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                          >
                            <ArchiveRestore className="h-3 w-3 mr-1" />
                            Restore
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(event.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  )
}
