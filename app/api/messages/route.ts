import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const locale = searchParams.get('locale') || 'de'
  
  // Validate locale
  if (!['de', 'en'].includes(locale)) {
    return NextResponse.json({ error: 'Invalid locale' }, { status: 400 })
  }

  try {
    const messagesModule =
      locale === 'en'
        ? await import('@/content/en/messages.json')
        : await import('@/content/de/messages.json')
    
    return NextResponse.json(messagesModule.default, {
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Error loading messages:', error)
    return NextResponse.json({ error: 'Failed to load messages' }, { status: 500 })
  }
} 