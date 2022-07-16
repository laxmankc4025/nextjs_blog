import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between my-8 items-center">
      <h1 className="font-medium text-xl">
        <Link href="/">
          <a>Next.js Blog</a>
        </Link>
      </h1>
      <div>
        {/* <a href="/" target="_blank" rel="noopener noreferrer" className="mr-4">
          Twitter
        </a> */}
        <Link href="/blogs">
          <a className="mr-4">Posts</a>
        </Link>
        <Link href="/">
          <a className="mr-4">Twitter</a>
        </Link>
        <Link href="/">
          <a>Github</a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
