
export default async function Home() {
  const response = await fetch('https://randomuser.me/api');
  const data = await response.json();
  const user = data.results[0]
  console.log(user);
  return (
    <>
      USER Data
    </>
  );
}
