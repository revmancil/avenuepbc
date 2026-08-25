'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { LogOut, Home, Radio, Save, Check, ExternalLink } from 'lucide-react'
import { toast } from 'sonner'

export default function AdminLiveStream() {
  const { data: session, status } = useSession() || {}
  const router = useRouter()
  const [url, setUrl] = useState('')
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    } else if (status === 'authenticated') {
      fetch('/api/live-stream')
        .then((res) => res.json())
        .then((data) => setUrl(data.url || ''))
        .catch((err) => console.error('Failed to load live stream url:', err))
        .finally(() => setLoading(false))
    }
  }, [status, router])

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/live-stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      })
      if (!res.ok) throw new Error()
      toast.success('Live stream link saved! It is now live on the Watch page.')
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const handleClear = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/live-stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: '' }),
      })
      if (!res.ok) throw new Error()
      setUrl('')
      toast.success('Live stream cleared. The Watch page will show the default message.')
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#800000]"></div>
      </div>
    )
  }

  if (status === 'unauthenticated') return null

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Live Stream</h1>
              <p className="text-sm text-gray-600 mt-1">
                Set this Sunday&apos;s Facebook live video
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/admin/dashboard">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white"
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Button
                onClick={() => signOut({ callbackUrl: '/admin/login' })}
                variant="outline"
                className="flex items-center gap-2 border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Radio className="h-5 w-5 text-[#800000]" />
              Set the Current Live Video
            </CardTitle>
            <CardDescription>
              Paste the link to today&apos;s Facebook live video. It will appear on the
              website&apos;s Watch page right away. You can clear it after the service.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Facebook Live Video Link
              </label>
              <Input
                type="url"
                placeholder="https://www.facebook.com/maxine.carroll.921/videos/1234567890"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full"
              />
              {url ? (
                <p className="mt-2 text-xs text-green-700 flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" /> A live video is currently set and showing on the site.
                </p>
              ) : (
                <p className="mt-2 text-xs text-gray-500">
                  No live video is set. The Watch page shows a &quot;not broadcasting&quot; message.
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleSave}
                disabled={saving}
                className="bg-[#800000] hover:bg-[#600000] flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                {saving ? 'Saving...' : 'Save & Go Live'}
              </Button>
              <Button
                onClick={handleClear}
                disabled={saving || !url}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Clear
              </Button>
              <Link href="/watch" target="_blank">
                <Button
                  variant="outline"
                  className="border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Preview Watch Page
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 border-[#d4a843]/40 bg-[#faf8f5]">
          <CardHeader>
            <CardTitle className="text-base">How to get the live video link</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600 space-y-2">
            <p>1. Start your live broadcast on Facebook as usual.</p>
            <p>
              2. Once you are live, open the live post on Facebook, tap the three dots
              (or &quot;Share&quot;), and choose <strong>Copy link</strong>.
            </p>
            <p>3. Paste that link in the box above and tap <strong>Save &amp; Go Live</strong>.</p>
            <p className="text-gray-500">
              Tip: The link should point to the specific video, e.g.
              <br />
              <span className="break-all">facebook.com/maxine.carroll.921/videos/1234567890</span>
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
