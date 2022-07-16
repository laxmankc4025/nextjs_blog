import Link from "next/link";
import styled from "@emotion/styled";

const Title = styled.div`
  cursor: pointer;
`;

function PostCard({ title, date, description, slug }) {
  return (
    <div className="my-4 py-4 border-b">
      <Link href="/[slug]" as={`/${slug}`}>
        <Title>
          <h1 className="font-bold text-2xl my-4">{title}</h1>
        </Title>
      </Link>
      <time className="text-gray-400">{date}</time>
      <p className="mt-4 italic">{description}</p>

      <Link href="/[slug]" as={`/${slug}`}>
        <a className="text-blue-500 mt-4 mb-2 block">Read more</a>
      </Link>
    </div>
  );
}

export default PostCard;
