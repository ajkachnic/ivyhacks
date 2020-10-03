import { useAuthState } from 'react-firebase-hooks/auth'
import firebase, { authProviders } from 'lib/client/firebase'
import { loginWith } from 'lib/client/helpers'
import { useRedirect, useRequireNoUser } from 'lib/client/hooks'

import { FC } from 'react'
import Container from 'components/container'
import Button from 'components/button'

const Index: FC = () => {
  const [ user, loading ] = useAuthState(firebase.auth())
  useRequireNoUser(user, loading, '/dashboard')

  const login = async () => {
    await loginWith(authProviders.google)()
    useRedirect('/onboard')
  }
  return <>
  <Container>
    <div className = "topnav"></div>
    <h1>Educal</h1>
    <p>
      Your one stop for motivating students during online learning
    </p>
    <Button onClick={login}>Login with Google</Button>
  </Container>
  </>
}

export default Index