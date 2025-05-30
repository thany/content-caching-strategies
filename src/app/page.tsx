import Link from "next/link";

const Home: React.FC = () => {
  return (
    <ul>
      <li><Link href="/pure-client-page">Pure client page</Link></li>
      <li><Link href="/wrapped-client-page">Wrapped client page</Link></li>
      <li><Link href="/server-page">Server page</Link></li>
      <li><Link href="/server-page-parallel">Server page (parallel)</Link></li>
      <li><Link href="/server-page-deferred">Server page (deferred)</Link></li>
      <li><Link href="/cached-computation">Cached computation</Link></li>
    </ul>
  );
};

export default Home;
