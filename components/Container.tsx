export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="  mx-auto min-h-screen flex flex-col container  px-3 ">
        {children}
      </div>
    </>
  );
}
