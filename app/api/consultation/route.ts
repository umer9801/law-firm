import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { sendConsultationEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const client = await clientPromise
    const db = client.db('law-firm')
    
    const consultation = {
      ...data,
      status: 'pending',
      createdAt: new Date(),
    }

    await db.collection('consultations').insertOne(consultation)
    
    await sendConsultationEmail(data)

    return NextResponse.json({ success: true, message: 'Consultation request submitted successfully' })
  } catch (error) {
    console.error('Consultation form error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit consultation request' },
      { status: 500 }
    )
  }
}
