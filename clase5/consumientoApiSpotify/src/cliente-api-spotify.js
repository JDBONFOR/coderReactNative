import React from 'react'
import { View, Text } from 'react-native'
import { AuthSession } from 'expo'
import * as SecureStore from 'expo-secure-store'

const SPOTIFY_CLIENT_ID = '708ce0b2e8f94e6b87025e1b30ad3830'
const SECURE_STORE_ACCESS_TOKEN_KEY = 'storeSecureKey'

let token

SecureStore.getItemAsync(SPOTIFY_CLIENT_ID)
    .then(accessToken => {
        console.log(accessToken);
        token = accessToken
    })
    .catch(e => {
        console.log(e);
    })

export const authorize = () => {
  console.warn('AUTH!')
  const redirectUrl = AuthSession.getRedirectUrl()

  /** Para saber que URL redirect debe ser */
  console.log(redirectUrl)

  return AuthSession.startAsync({
    authUrl:
      `https://accounts.spotify.com/authorize?response_type=token` +
      `&client_id=${SPOTIFY_CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
      `&scope=user-follow-read`,
  }).then(result => this.handleAuthResult(result))
}

handleAuthResult = ({ type, params }) => {
  if (type !== 'success') {
    console.warn('Algo salió mal', result)
    return false
  }

  const accessToken = params.access_token

  SecureStore.setItemAsync(SECURE_STORE_ACCESS_TOKEN_KEY, accessToken).then(() => {
    token = accessToken
  })

  return true
}

export const getUserArtistsPromise = () => {
  return fetch('https://api.spotify.com/v1/me/following?type=artist', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then(result => {
      //console.warn('resultado', result.artists.items)
      if (result.error && [401, 403].includes(result.error.status)) {
        throw new Error('Authorization error')
      }

      const artistas = result.artists.items.map(({ name: nombre, images, followers: { total: seguidores } }) => {
        return {
          nombre,
          seguidores,
          imagen: images[0].url,
        }
      })
      return artistas
    })
}

export const getUserArtistsAsync = async accessToken => {
  const response = await fetch('https://api.spotify.com/v1/me/following?type=artist', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  const result = await response.json()

  if (result.error && [401, 403].includes(result.error.status)) {
    throw new Error('Authorization error')
  }

  const artistas = result.artists.items.map(({ name, images, followers: { total } }) => ({
    nombre: name,
    seguidores: total,
    imagen: images[0].url,
  }))

  console.log('getUserArtistsAsync', artistas);
  return artistas
}

