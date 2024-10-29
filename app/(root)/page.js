import UserCard from '@/components/UserCard';

export default async function Home() {
  const response = await fetch(`${process.env.API_URL}/api`);
  const data = await response.json();
  const user = data.results[0];
  console.log(user);
  return (
    <main className='flex justify-center items-center h-screen bg-gray-100 text-black'>
      <UserCard user={user} />
    </main>
  );
}
