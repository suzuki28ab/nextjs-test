import axios from 'axios'
import useSWRImmutable from 'swr/immutable'

type GithubUser = {
  avatar_url: string
  login: string
}

const fetcher = (url: string) => axios.get(url).then(res => res.data)

const useGithubUser = (githubId: string) => {
  const { data, error } = useSWRImmutable<GithubUser, Error>(
    `https://api.github.com/users/${githubId}`,
    fetcher,
  )

  return {
    data,
    isError: error,
  }
}

export default useGithubUser
