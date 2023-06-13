import { Card, Grid } from "./menu.styles";

export const Menu = () => (
  <Grid>
    <Card href="/">
      <h2>
        Home <span>-&gt;</span>
      </h2>
      <p>The initial page</p>
    </Card>

    <Card href="/about">
      <h2>
        About <span>-&gt;</span>
      </h2>
      <p>The about page</p>
    </Card>

    <Card href="/sample">
      <h2>
        Sample <span>-&gt;</span>
      </h2>
      <p>The sample page</p>
    </Card>

    <Card href="/fill">
      <h2>
        Fill <span>-&gt;</span>
      </h2>
      <p>The fill page</p>
    </Card>
  </Grid>
)
