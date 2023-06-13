'use client';

import { Main } from "~/app/page.styles";
import { Menu } from "~/components/menu.component";
import { Body } from "~/components/body.component";

export default function Page() {
  return (
    <Main>
      <Body>
        <p>
          This is the ABOUT page.
        </p>
      </Body>

      <Menu />
    </Main>
  )
}
