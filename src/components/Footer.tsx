import Contact from "./Contact";

export default function Footer() {
  return (
    <>
      <footer className="py-10 flex flex-col items-center justify-center dark:bg-black bg-neutral-200">
        <Contact />
        <p>© {new Date().getFullYear()} Kim Møller</p>
      </footer>
    </>
  );
}
