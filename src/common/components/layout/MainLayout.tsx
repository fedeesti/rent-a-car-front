interface IProps {
  children: JSX.Element;
}

function MainLayout({ children }: IProps) {
  return (
    <main className="sm:ml-56">
      <section className="rounded-lg mt-14 pt-3 sm:p-5 min-h-screen">{children}</section>
    </main>
  );
}

export default MainLayout;
