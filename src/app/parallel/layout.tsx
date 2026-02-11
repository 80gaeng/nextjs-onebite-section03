import Link from 'next/link';

export default function Layout({
  children,
  sidebar,
  feed,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  feed: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Link href='/parallel'>Parallel</Link> &nbsp;
        <Link href='/parallel/setting'>Setting</Link>
        <br />
      </div>
      {sidebar}
      {children}
      {feed}
    </div>
  );
}
