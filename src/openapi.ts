export const getOpenAPISchema = (request: Request) => {
  return {
    openapi: '3.0.1',
    info: {
      title: 'Current Time API',
      description:
        'A plugin that allows the user to get what time it is now in their location using ChatGPT. If you do not know where the user lives, always ask back where they live before querying the API. And always be sure to run the API when asked something to get latest time.',
      version: 'v1'
    },
    servers: [
      {
        url: new URL('/', request.url).toString().replace(/\/$/, '')
      }
    ],
    paths: {
      '/time': {
        get: {
          operationId: 'getTime',
          summary: 'Get the current time in UTC',
          responses: {
            '200': {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/getTimeResponse'
                  }
                }
              }
            }
          }
        }
      }
    },
    components: {
      schemas: {
        getTimeResponse: {
          type: 'object',
          properties: {
            now: {
              type: 'string',
              description: 'current time'
            }
          }
        }
      }
    }
  }
}
