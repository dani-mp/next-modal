export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Second level layout</h1>
      {children}
    </>
  );
}
