'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Calendar, Youtube, Facebook, Radio,  ExternalLink } from 'lucide-react';
import V2Header from '@/components/v2/v2-header';
import V2Footer from '@/components/v2/v2-footer';
import V2CTA from '@/components/v2/v2-cta';
import Reveal from '@/components/v2/v2-reveal';

interface Sermon {
  id: string;
  title: string;
  date: string;
  pastor: string;
  scripture: string | null;
  videoUrl: string | null;
  description: string | null;
  isPublished: boolean;
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const watchMatch = url.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/);
    if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
    const shortMatch = url.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
    const embedMatch = url.match(/(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
    if (embedMatch) return url;
    return null;
  } catch {
    return null;
  }
}

function getLiveEmbedUrl(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();
  const yt = getYouTubeEmbedUrl(trimmed);
  if (yt) return `${yt}?autoplay=0&rel=0`;
  if (/facebook\.com|fb\.watch|fb\.me/i.test(trimmed)) {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
      trimmed,
    )}&show_text=false&autoplay=false`;
  }
  return null;
}

export default function V2WatchPage() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);
  const [liveUrl, setLiveUrl] = useState('');

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const res = await fetch('/api/admin/sermons');
        if (res.ok) {
          const data = await res.json();
          const published = data.filter((s: Sermon) => s.isPublished !== false);
          setSermons(published.slice(0, 6));
        }
      } catch (err) {
        console.error('Failed to fetch sermons:', err);
      } finally {
        setLoading(false);
      }
    };
    const fetchLiveUrl = async () => {
      try {
        const res = await fetch('/api/live-stream');
        if (res.ok) {
          const data = await res.json();
          setLiveUrl(data.url || '');
        }
      } catch (err) {
        console.error('Failed to fetch live stream url:', err);
      }
    };
    fetchSermons();
    fetchLiveUrl();
  }, []);

  const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@AvenuePBC';
  const FACEBOOK_LIVE_URL = 'https://www.facebook.com/maxine.carroll.921';
  const liveEmbedUrl = getLiveEmbedUrl(liveUrl);

  return (
    <div className="min-h-screen bg-white">
      <V2Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-maroon-950">
          <div className="absolute inset-0">
            <Image
              src="/images/photos/65th-pulpit-preaching.jpg"
              alt="Worship at THE AVENUE"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/90 to-maroon-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/25 to-maroon-950/70" />
          </div>
          <div className="pointer-events-none absolute top-1/4 -left-20 w-[26rem] h-[26rem] rounded-full bg-gold-400/10 blur-3xl" />

          <div className="relative z-10 container-width w-full pt-32 pb-16">
            <div className="max-w-3xl">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-4">Watch Online</p>
              <h1 className="font-serif text-white font-bold leading-[0.98] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Watch &amp; Listen
              </h1>
              <p className="font-sans text-lg md:text-xl text-white/80 max-w-xl leading-relaxed mb-8">
                Can&rsquo;t make it in person? Join us online for worship, sermons, and encouragement.
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-[1.5rem] p-6 max-w-md border border-white/10">
                <p className="uppercase tracking-[0.2em] text-gold-400 text-xs font-semibold mb-3">
                  Live Service Schedule
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white font-serif font-bold">Sunday Worship</p>
                    <p className="text-white/70 text-sm">11:15 AM CST</p>
                  </div>
                  <div>
                    <p className="text-white font-serif font-bold">Wed Bible Study</p>
                    <p className="text-white/70 text-sm">6:30 PM CST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Stream */}
        <section className="py-24 bg-cream">
          <div className="container-width">
            <Reveal className="max-w-2xl mx-auto text-center mb-12">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">Join Us Live</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05] mb-5">
                Live Stream
              </h2>
              <p className="font-sans text-lg text-gray-600 leading-relaxed">
                Watch live during service times or catch up on our latest messages.
              </p>
            </Reveal>

            <div className="max-w-4xl mx-auto mb-10">
              {liveEmbedUrl ? (
                <>
                  <div className="bg-black rounded-[1.5rem] overflow-hidden shadow-2xl aspect-video ring-1 ring-black/10">
                    <iframe
                      src={liveEmbedUrl}
                      title="The Avenue Live Stream"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      scrolling="no"
                      frameBorder={0}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Having trouble with the player?{' '}
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-maroon-800 font-medium hover:underline">
                      Open the live video on Facebook
                    </a>
                    .
                  </p>
                </>
              ) : (
                <>
                  <div className="bg-maroon-950 rounded-[1.5rem] overflow-hidden shadow-2xl aspect-video flex items-center justify-center relative ring-1 ring-white/10">
                    <div className="absolute inset-0 opacity-25">
                      <Image
                        src="/images/photos/65th-prayer-circle.jpg"
                        alt="Worship at THE AVENUE"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 900px"
                      />
                    </div>
                    <div className="relative z-10 text-center px-6">
                      <Facebook size={40} className="text-gold-400 mx-auto mb-4" />
                      <p className="font-serif text-2xl font-bold text-white mb-2">
                        We&rsquo;re Not Broadcasting Right Now
                      </p>
                      <p className="text-white/75 text-sm max-w-md mx-auto">
                        Join us live on Facebook during our Sunday Worship (11:15 AM CST) and Wednesday
                        Bible Study (6:30 PM CST).
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    When we go live, the service will appear right here. You can also {' '}
                    <a href={FACEBOOK_LIVE_URL} target="_blank" rel="noopener noreferrer" className="text-maroon-800 font-medium hover:underline">
                      watch on Facebook
                    </a>
                    .
                  </p>
                </>
              )}
            </div>

            {/* Platform cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[1.5rem] p-6 text-center ring-1 ring-black/5 shadow-sm hover:shadow-md transition-all group"
              >
                <Youtube size={32} className="text-red-600 mx-auto mb-3" />
                <h3 className="font-serif text-lg font-bold text-maroon-900 mb-1">YouTube</h3>
                <p className="text-sm text-gray-500 mb-3">Subscribe for live streams and past sermons.</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-maroon-800 group-hover:underline">
                  Visit Channel <ExternalLink size={12} />
                </span>
              </a>

              <a
                href={FACEBOOK_LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[1.5rem] p-6 text-center ring-1 ring-black/5 shadow-sm hover:shadow-md transition-all group"
              >
                <Facebook size={32} className="text-blue-600 mx-auto mb-3" />
                <h3 className="font-serif text-lg font-bold text-maroon-900 mb-1">Facebook Live</h3>
                <p className="text-sm text-gray-500 mb-3">Watch our live service on Facebook.</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-maroon-800 group-hover:underline">
                  Watch on Facebook <ExternalLink size={12} />
                </span>
              </a>

              <div className="bg-white rounded-[1.5rem] p-6 text-center ring-1 ring-black/5 shadow-sm">
                <Radio size={32} className="text-maroon-800 mx-auto mb-3" />
                <h3 className="font-serif text-lg font-bold text-maroon-900 mb-1">Audio Sermons</h3>
                <p className="text-sm text-gray-500 mb-3">Listen to past messages on the go.</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-400">Coming Soon</span>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Sermons */}
        <section className="py-24 bg-white">
          <div className="container-width">
            <Reveal className="max-w-2xl mx-auto text-center mb-12">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">Sermon Archive</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05]">
                Recent Messages
              </h2>
            </Reveal>

            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-maroon-800" />
              </div>
            ) : sermons.length === 0 ? (
              <div className="text-center py-12">
                <Play size={40} className="text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">Sermons will be available here soon. Stay tuned!</p>
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-maroon-800 hover:underline"
                >
                  Watch on YouTube <ExternalLink size={14} />
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sermons.map((sermon) => {
                  const embedUrl = sermon.videoUrl ? getYouTubeEmbedUrl(sermon.videoUrl) : null;
                  return (
                    <div key={sermon.id} className="bg-white rounded-[1.5rem] overflow-hidden ring-1 ring-black/5 shadow-sm hover:shadow-lg transition-shadow">
                      {embedUrl ? (
                        <div className="aspect-video bg-black">
                          <iframe
                            src={`${embedUrl}?rel=0`}
                            title={sermon.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-maroon-950 flex items-center justify-center">
                          <div className="text-center">
                            <Play size={32} className="text-gold-400 mx-auto mb-2" />
                            <p className="text-white/60 text-xs">No video</p>
                          </div>
                        </div>
                      )}

                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                          <Calendar size={12} className="text-gold-500" />
                          <span>
                            {new Date(sermon.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                          {sermon.pastor && (
                            <>
                              <span className="text-gray-300">&bull;</span>
                              <span>{sermon.pastor}</span>
                            </>
                          )}
                        </div>
                        <h3 className="font-serif text-lg font-bold text-maroon-900 mb-1">{sermon.title}</h3>
                        {sermon.scripture && (
                          <p className="text-sm text-gold-700 font-medium mb-1">{sermon.scripture}</p>
                        )}
                        {sermon.description && (
                          <p className="text-sm text-gray-500 line-clamp-2">{sermon.description}</p>
                        )}
                        {sermon.videoUrl && (
                          <a
                            href={sermon.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon-800 hover:underline mt-3"
                          >
                            <Youtube size={14} /> Watch on YouTube
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <V2CTA
          title="Nothing Replaces Being There"
          text="Online is wonderful, but there’s nothing like worshipping together in person. We’d love to see you this Sunday."
          buttons={[{ label: 'Plan Your Visit', href: '/visit', primary: true }]}
        />
      </main>
      <V2Footer />
    </div>
  );
}
