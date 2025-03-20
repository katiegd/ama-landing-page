export default function Header() {
  return (
    <>
      <div className="bg-black flex justify-between text-slate-200 font-mono items-center pr-5">
        <img
          src="https://www.amaearthgroup.com/static/media/ama-logo.17ae1539f6a7a2738975.png"
          alt=""
          className="max-w-16"
        />
        <div className="nav flex gap-8 underline-offset-4">
          <p className="hover:underline decoration-2 underline-offset-4 decoration-red-700 cursor-pointer">
            About
          </p>
          <p className="hover:underline decoration-2 decoration-red-700 cursor-pointer">
            Restoration
          </p>
          <p className="hover:underline decoration-2 decoration-red-700 cursor-pointer">
            Product
          </p>
        </div>
      </div>
    </>
  );
}
