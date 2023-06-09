import { useAtom, useAtomValue } from "jotai";
import { atomError } from "../../stores/auth";

export function LoginError() {
  const { index, msgs } = useAtomValue(atomError);
  const msg = msgs.join(" ");
  return (
    <ul className="error-messages">
      {
        [
          <></>,
          <li>email {msg}</li>,
          <li>password {msg}</li>,
          <li>email or password {msg}</li>,
        ][index]
      }
    </ul>
  );
}
