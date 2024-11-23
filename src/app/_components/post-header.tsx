import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  /**
   * Reading time of the post content in minutes
   */
  readingTime: number;
};

export function PostHeader({
  title,
  coverImage,
  date,
  author,
  readingTime,
}: Props) {
  return (
    <div>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
        <div className="mb-6 text-lg flex">
          <DateFormatter dateString={date} />
          &nbsp;
          <p>
            {"  - "} {readingTime} minutos de leitura
          </p>
        </div>
      </div>
      <div className="justify-items-center">
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
      </div>
      <div>
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="block md:hidden mb-6 text-lg">
          <DateFormatter dateString={date} />
          &nbsp;
          <p>
            {"  - "} {readingTime} minutos de leitura
          </p>
        </div>
      </div>
    </div>
  );
}
