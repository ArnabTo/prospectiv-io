
import { client } from "@/sanity/lib/client";


export async function POST(request: Request) {
    const { name, email } = await request.json();
    try {
        if (!name || !email) return new Response(JSON.stringify({ message: 'Please enter name and email' }), { status: 400 })
        const response = await client.create({
            _type: 'userData',
            name: name,
            email: email
        })
        return new Response(JSON.stringify(response), { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify(error), { status: 500 })
    }
}