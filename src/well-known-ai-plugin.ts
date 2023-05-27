export const getPluginJSON = (request: Request) => {
  console.log(request.url)
  return {
    schema_version: 'v1',
    name_for_human: 'Time Plugin (no auth)',
    name_for_model: 'time',
    description_for_model:
      "Plugin for getting a current time in the current location from the user's saying (such as 'What time is it now?' or 'Im living in Tokyo, What time?'). Use it whenever you have a question about the current time.",
    description_for_human: 'Get what time it is now in your location.',
    auth: {
      type: 'none'
    },
    api: {
      type: 'openapi',
      url: `${new URL('/openapi.json', request.url).toString()}`,
      is_user_authenticated: false
    },
    logo_url: `${new URL('/logo.png', request.url).toString()}`,
    contact_email: 'legal@example.com',
    legal_info_url: 'http://example.com/legal'
  }
}
