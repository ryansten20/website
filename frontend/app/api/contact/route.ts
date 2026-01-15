import {NextResponse} from 'next/server'
import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_KEY_)

export async function POST(request: Request) {
    try {
    const { name, email, message } = await request.json()

    if(!name || !email || !message) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    const response = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'ryansten20@outlook.com',
        subject: 'New Contact Form Submission',
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>`,
    })

    return NextResponse.json({ message: 'Message sent' }, { status: 200 })
    } catch (error) {
        console.error('Error sending message:', error)
        return NextResponse.json({ message: 'Error sending message' }, { status: 500 })
    }
}