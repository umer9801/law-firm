import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { sendContactEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const client = await clientPromise
    const db = client.db('law-firm')
    
    const contact = {
      ...data,
      createdAt: new Date(),
    }

    await db.collection('contacts').insertOne(contact)
    
    await sendContactEmail(data)

    return NextResponse.json({ success: true, message: 'Contact form submitted successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
