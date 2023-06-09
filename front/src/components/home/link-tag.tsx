import { useSetAtom } from "jotai";
import { atomSetFeedQuery } from "../../stores/feed";

interface LinkTagProps {
  name: string;
}
export function LinkTag({ name }: LinkTagProps) {
  // ANCHOR store
  const setFeedQuery = useSetAtom(atomSetFeedQuery);

  return (
    <a
      href=""
      className="tag-default tag-pill"
      onClick={(e) => {
        e.preventDefault();
        setFeedQuery(["tag", name]);
      }}
    >
      {name}
    </a>
  );
}
