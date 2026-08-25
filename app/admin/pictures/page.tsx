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
import { ImageIcon, Plus, Pencil, Trash2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Picture {
  id: string
  title: string
  description: string | null
  imageUrl: string
  category: string
  isActive: boolean
  createdAt: string
}

export default function AdminPicturesPage() {
  const { data: session, status } = useSession() || {}
  const router = useRouter()
  const [pictures, setPictures] = useState<Picture[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingPicture, setEditingPicture] = useState<Picture | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'general',
    isActive: true,
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    } else if (status === 'authenticated') {
      fetchPictures()
    }
  }, [status, router])

  const fetchPictures = async () => {
    try {
      const response = await fetch('/api/admin/pictures')
      const data = await response.json()
      setPictures(data)
    } catch (error) {
      toast.error('Failed to fetch pictures')
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
      formDataToSend.append('category', formData.category)
      formDataToSend.append('isActive', formData.isActive.toString())
      
      if (editingPicture) {
        if (imageFile) formDataToSend.append('image', imageFile)
      } else {
        if (!imageFile) {
          toast.error('Please select an image')
          setSubmitting(false)
          return
        }
        formDataToSend.append('image', imageFile)
      }

      const url = editingPicture
        ? `/api/admin/pictures/${editingPicture.id}`
        : '/api/admin/pictures'
      const method = editingPicture ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        body: formDataToSend,
      })

      if (!response.ok) throw new Error('Failed to save picture')

      toast.success(editingPicture ? 'Picture updated successfully' : 'Picture added successfully')
      setDialogOpen(false)
      resetForm()
      fetchPictures()
    } catch (error) {
      toast.error('Failed to save picture')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this picture?')) return

    try {
      const response = await fetch(`/api/admin/pictures/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Failed to delete picture')

      toast.success('Picture deleted successfully')
      fetchPictures()
    } catch (error) {
      toast.error('Failed to delete picture')
    }
  }

  const handleEdit = (picture: Picture) => {
    setEditingPicture(picture)
    setFormData({
      title: picture.title,
      description: picture.description || '',
      category: picture.category,
      isActive: picture.isActive,
    })
    setDialogOpen(true)
  }

  const resetForm = () => {
    setEditingPicture(null)
    setFormData({
      title: '',
      description: '',
      category: 'general',
      isActive: true,
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
              <h1 className="text-2xl font-bold text-gray-900">Manage Pictures</h1>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-maroon-800 hover:bg-maroon-900" onClick={resetForm}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Picture
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingPicture ? 'Edit Picture' : 'Add New Picture'}
                  </DialogTitle>
                  <DialogDescription>
                    {editingPicture
                      ? 'Update the picture information below'
                      : 'Fill in the details to add a new picture'}
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
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="worship">Worship</SelectItem>
                        <SelectItem value="events">Events</SelectItem>
                        <SelectItem value="ministry">Ministry</SelectItem>
                        <SelectItem value="facility">Facility</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Image {!editingPicture && '*'}</Label>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                      required={!editingPicture}
                    />
                    {editingPicture && (
                      <p className="text-xs text-gray-500">
                        Leave empty to keep the current image
                      </p>
                    )}
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
                        : editingPicture
                        ? 'Update Picture'
                        : 'Add Picture'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {pictures.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <ImageIcon className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 text-center">
                No pictures yet. Click &quot;Add Picture&quot; to upload one.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pictures.map((picture) => (
              <Card key={picture.id} className="overflow-hidden">
                <div className="relative aspect-video bg-gray-200">
                  <Image
                    src={picture.imageUrl}
                    alt={picture.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <span className="line-clamp-1 text-base">{picture.title}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        picture.isActive
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {picture.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </CardTitle>
                  <CardDescription className="capitalize">
                    {picture.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {picture.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {picture.description}
                    </p>
                  )}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(picture)}
                      className="flex-1"
                    >
                      <Pencil className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(picture.id)}
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
