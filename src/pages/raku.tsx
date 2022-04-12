import Header from '@/components/Header'
import TestCard from '@/components/TestCard'
import useGithubUser from '@/hooks/useGithubUser'

const Raku = () => {
  const { data, isError } = useGithubUser('raku3')
  const isLoading = !data

  if (isError) return <div>Error!</div>

  return (
    <>
      <Header />
      {!isLoading && (
        <TestCard imgSrc={data.avatar_url} titleText={`${data.login}のアバター画像`} />
      )}
    </>
  )
}

export default Raku
