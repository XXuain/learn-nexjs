/** @format */
import Head from 'next/head';
import Button from 'components/ui/button';
import { signIn } from 'next-auth/react';

function Home() {
  const handleSignIn = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      email: 'yyyyy',
      password: '123456',
    });
    console.log('result', result);
  };
  return (
    <>
      <Head>
        <title>This is page title</title>
        <meta
          name="description"
          content={'Browser a huge list of highly active React neetups!'}
        />
      </Head>
      <Button onClick={handleSignIn}>NextAuth</Button>
    </>
  );
}

export default Home;
