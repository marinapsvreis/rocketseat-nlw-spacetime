/* eslint-disable prettier/prettier */
import axios from 'axios'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export async function authRoutes(app: FastifyInstance) {
    app.post('/register', async(request) => {
        const bodySchema = z.object({
            code: z.string()
        })

        const { code } = bodySchema.parse(request.body)

        const accessTokenResponse = await axios.post(
            'https://github.com/login/oauth/access_token',
            null,
            {
                params: {
                    client_id: process.env.GITHUB_CLIENT_ID,
                    client_secret: process.env.GITHUB_CLIENT_SECRET,
                    code,
                },

                headers: {
                    Accept: 'application/json'
                },
            }
        )

        const { access_token } = accessTokenResponse.data

        const userReponse = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })

        const userSchema = z.object({
            id: z.number(),
            login: z.string(),
            name: z.string(),
            avatar_url: z.string().url()
        })

        const user = userSchema.parse(userReponse.data)

        return user
    })
}
