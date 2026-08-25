'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { toast } from 'sonner'
import { FileText, Plus, Pencil, Trash2, ArrowLeft, Youtube, Music } from 'lucide-react'
import Link from 'next/link'
import { format } from 'date-fns'

interface Sermon {
  id: string
  title: string
  description: string | null
  pastor: string
  date: string
  scripture: string | null
  audioUrl: string | null
  videoUrl: string | null
  thumbnailUrl: string | null
  isPublished: boolean
}

export default function AdminSermonsPage() {
  const { data: session, status } = useSession() || {}
  const router = useRouter()
  const [sermons, setSermons] = useState<Sermon[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingSermon, setEditingSermon] = useState<Sermon | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    pastor: 'Dr. Mancil Carroll III',
    scripture: '',
    videoUrl: '',
    isPublished: true,
  })
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    } else if (status === 'authenticated') {
      fetchSermons()
    }
  }, [status, router])

  const fetchSermons = async () => {
    try {
      const response = await fetch('/api/admin/sermons')
      const data = await response.json()
      setSermons(data)
    } catch (error) {
      toast.error('Failed to fetch sermons')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('title', formData.title)
      if (formData.description) formDataToSend.append('description', formData.description)
      formDataToSend.append('date', formData.date)
      formDataToSend.append('pastor', formData.pastor)
      if (formData.scripture) formDataToSend.append('scripture', formData.scripture)
      if (formData.videoUrl) formDataToSend.append('videoUrl', formData.videoUrl)
      formDataToSend.append('isPublished', formData.isPublished.toString())
      if (audioFile) formDataToSend.append('audio', audioFile)

      const url = editingSermon
        ? `/api/admin/sermons/${editingSermon.id}`
        : '/api/admin/sermons'
      const method = editingSermon ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        body: formDataToSend,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Failed to save sermon')
      }

      toast.success(editingSermon ? 'Sermon updated successfully' : 'Sermon added successfully')
      setDialogOpen(false)
      resetForm()
      fetchSermons()
    } catch (error: any) {
      toast.error(error.message || 'Failed to save sermon')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this sermon?')) return

    try {
      const response = await fetch(`/api/admin/sermons/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Failed to delete sermon')

      toast.success('Sermon deleted successfully')
      fetchSermons()
    } catch (error) {
      toast.error('Failed to delete sermon')
    }
  }

  const handleEdit = (sermon: Sermon) => {
    setEditingSermon(sermon)
    setFormData({
      title: sermon.title,
      description: sermon.description || '',
      date: sermon.date ? format(new Date(sermon.date), 'yyyy-MM-dd') : '',
      pastor: sermon.pastor || 'Dr. Mancil Carroll III',
      scripture: sermon.scripture || '',
      videoUrl: sermon.videoUrl || '',
      isPublished: sermon.isPublished,
    })
    setDialogOpen(true)
  }

  const resetForm = () => {
    setEditingSermon(null)
    setFormData({
      title: '',
      description: '',
      date: '',
      pastor: 'Dr. Mancil Carroll III',
      scripture: '',
      videoUrl: '',
      isPublished: true,
    })
    setAudioFile(null)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
    resetForm()
  }

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maroon-800"></div>
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
              <h1 className="text-2xl font-bold text-gray-900">Manage Sermons</h1>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-maroon-800 hover:bg-maroon-900" onClick={resetForm}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Sermon
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingSermon ? 'Edit Sermon' : 'Add New Sermon'}
                  </DialogTitle>
                  <DialogDescription>
                    {editingSermon
                      ? 'Update the sermon information below'
                      : 'Fill in the details to add a new sermon. Paste a YouTube link to connect a video.'}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Sermon Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      placeholder="e.g., Walking in Faith"
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
                      placeholder="Brief summary of the sermon..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pastor">Speaker *</Label>
                      <Input
                        id="pastor"
                        value={formData.pastor}
                        onChange={(e) =>
                          setFormData({ ...formData, pastor: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="scripture">Scripture Reference</Label>
                    <Input
                      id="scripture"
                      value={formData.scripture}
                      onChange={(e) =>
                        setFormData({ ...formData, scripture: e.target.value })
                      }
                      placeholder="e.g., John 3:16"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="videoUrl" className="flex items-center gap-2">
                      <Youtube className="h-4 w-4 text-red-600" />
                      YouTube Video Link
                    </Label>
                    <Input
                      id="videoUrl"
                      type="url"
                      value={formData.videoUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, videoUrl: e.target.value })
                      }
                      placeholder="https://www.youtube.com/watch?v=..."
                    />
                    <p className="text-xs text-gray-500">
                      Paste the YouTube link for this sermon. Supports youtube.com/watch and youtu.be links.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="audio" className="flex items-center gap-2">
                      <Music className="h-4 w-4 text-blue-600" />
                      Audio File (optional)
                    </Label>
                    <Input
                      id="audio"
                      type="file"
                      accept="audio/*"
                      onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
                    />
                    {editingSermon?.audioUrl && (
                      <p className="text-xs text-gray-500">
                        Current audio file exists. Upload a new file to replace it.
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isPublished"
                      checked={formData.isPublished}
                      onChange={(e) =>
                        setFormData({ ...formData, isPublished: e.target.checked })
                      }
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="isPublished" className="cursor-pointer">
                      Published (visible on website)
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
                      className="bg-maroon-800 hover:bg-maroon-900"
                      disabled={submitting}
                    >
                      {submitting
                        ? 'Saving...'
                        : editingSermon
                        ? 'Update Sermon'
                        : 'Add Sermon'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {sermons.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 text-center">
                No sermons yet. Click &quot;Add Sermon&quot; to add your first one.
              </p>
              <p className="text-sm text-gray-400 text-center mt-2">
                You can paste YouTube links to connect sermon videos from your channel.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermons.map((sermon) => (
              <Card key={sermon.id}>
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <span className="line-clamp-2">{sermon.title}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded flex-shrink-0 ml-2 ${
                        sermon.isPublished
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {sermon.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </CardTitle>
                  <CardDescription>
                    {format(new Date(sermon.date), 'MMM dd, yyyy')} &bull; {sermon.pastor}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {sermon.scripture && (
                    <p className="text-sm font-medium text-maroon-700 mb-2">
                      {sermon.scripture}
                    </p>
                  )}
                  {sermon.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {sermon.description}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sermon.audioUrl && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded flex items-center gap-1">
                        <Music className="h-3 w-3" /> Audio
                      </span>
                    )}
                    {sermon.videoUrl && (
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded flex items-center gap-1">
                        <Youtube className="h-3 w-3" /> Video
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(sermon)}
                      className="flex-1"
                    >
                      <Pencil className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(sermon.id)}
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
      </main>
    </div>
  )
}
