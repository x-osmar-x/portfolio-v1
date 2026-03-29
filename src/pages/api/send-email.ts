export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const subject = data.get('subject') as string;
    const message = data.get('message') as string;

    // Validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Todos los campos son requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create email content
    const emailContent = `
      Nuevo mensaje de contacto desde el portfolio:

      Nombre: ${name}
      Email: ${email}
      Asunto: ${subject}

      Mensaje:
      ${message}
    `;

    // Using Resend API (you'll need to add RESEND_API_KEY to environment variables)
    const resendApiKey = import.meta.env.RESEND_API_KEY;
    const destinationEmail = import.meta.env.DESTINATION_EMAIL || 'o1b9c9h3@gmail.com';
    
    if (!resendApiKey) {
      // Return error if no API key configured
      return new Response(
        JSON.stringify({ 
          error: 'Email service no configurado. Agrega RESEND_API_KEY a tu archivo .env' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev', // Resend's verified domain - allows sending to any email
        to: destinationEmail,
        subject: `Contacto: ${subject}`,
        text: emailContent,
        reply_to: email,
      }),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Resend API error: ${response.status} - ${errorText}`);
    }

    return new Response(
      JSON.stringify({ success: 'Email enviado correctamente' }),
      { 
        status: 303, 
        headers: { 
          'Content-Type': 'application/json',
          'Location': '../#contact'
        } 
      }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return new Response(
      JSON.stringify({ error: `Error al enviar el email: ${errorMessage}` }),
      { 
        status: 303, 
        headers: { 
          'Content-Type': 'application/json',
          'Location': '../#contact'
        } 
      }
    );
  }
};
