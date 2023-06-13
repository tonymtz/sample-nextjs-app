'use client';

import { Main } from "~/app/page.styles";
import { Menu } from "~/components/menu.component";
import { Body } from "~/components/body.component";

export default function Fill() {
  return (
    <Main>
      <Body>
        <p>
          This is the FILL page.
        </p>
      </Body>

      <Menu />
    </Main>
  )
}
