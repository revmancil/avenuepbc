
'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { Calendar, FileText, Image, Users, LogOut, Home, Radio } from 'lucide-react'

export default function AdminDashboard() {
  const { data: session, status } = useSession() || {}
  const router = useRouter()
  const [counts, setCounts] = useState({
    events: 0,
    sermons: 0,
    pictures: 0,
    staff: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    } else if (status === 'authenticated') {
      // Fetch counts
      Promise.all([
        fetch('/api/admin/events').then(res => res.json()),
        fetch('/api/admin/sermons').then(res => res.json()),
        fetch('/api/admin/pictures').then(res => res.json()),
        fetch('/api/admin/staff').then(res => res.json()),
      ]).then(([events, sermons, pictures, staff]) => {
        setCounts({
          events: events.length || 0,
          sermons: sermons.length || 0,
          pictures: pictures.length || 0,
          staff: staff.length || 0,
        })
        setIsLoading(false)
      }).catch((error) => {
        console.error('Error fetching counts:', error)
        setIsLoading(false)
      })
    }
  }, [status, router])

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/admin/login' })
  }

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maroon-800"></div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">
                Welcome, {session?.user?.name || session?.user?.email}
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white"
                >
                  <Home className="h-4 w-4" />
                  Return to Home
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{counts.events}</div>
              <p className="text-xs text-muted-foreground">Total events</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sermons</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{counts.sermons}</div>
              <p className="text-xs text-muted-foreground">Total sermons</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pictures</CardTitle>
              <Image className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{counts.pictures}</div>
              <p className="text-xs text-muted-foreground">Total pictures</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Staff</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{counts.staff}</div>
              <p className="text-xs text-muted-foreground">Total staff members</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Manage Events</CardTitle>
              <CardDescription>
                Create, edit, and delete church events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/events">
                <Button className="w-full bg-[#800000] hover:bg-[#600000]">
                  Manage Events
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manage Sermons</CardTitle>
              <CardDescription>
                Upload and manage sermon recordings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/sermons">
                <Button className="w-full bg-[#800000] hover:bg-[#600000]">
                  Manage Sermons
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manage Pictures</CardTitle>
              <CardDescription>
                Upload and organize church photos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/pictures">
                <Button className="w-full bg-[#800000] hover:bg-[#600000]">
                  Manage Pictures
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manage Staff</CardTitle>
              <CardDescription>
                Update staff information and photos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/staff">
                <Button className="w-full bg-[#800000] hover:bg-[#600000]">
                  Manage Staff
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Radio className="h-4 w-4 text-[#800000]" />
                Live Stream
              </CardTitle>
              <CardDescription>
                Set this Sunday&apos;s Facebook live video link
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/live-stream">
                <Button className="w-full bg-[#800000] hover:bg-[#600000]">
                  Set Live Stream
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
