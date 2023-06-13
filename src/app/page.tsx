'use client';

import { Main } from "~/app/page.styles";
import { Menu } from "~/components/menu.component";
import { Body } from "~/components/body.component";

export default function Home() {
  return (
    <Main>
      <Body>
        <p>
          The HOME page.
        </p>
      </Body>

      <Menu/>
    </Main>
  )
}
